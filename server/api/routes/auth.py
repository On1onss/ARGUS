import uuid
from datetime import timedelta, datetime, timezone

from fastapi import APIRouter, Depends, status, HTTPException
from typing import Annotated

from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jose import jwt, JWTError, ExpiredSignatureError
from passlib.context import CryptContext
from sqlalchemy import select, insert
from sqlalchemy.ext.asyncio import AsyncSession

from core.db import get_db
from models.user import User
from config import settings
from schemas import CreateUser, Token

router = APIRouter(prefix="/auth", tags=['Auth'])
bcrypt_context = CryptContext(schemes=['bcrypt'], deprecated='auto')
oauth2_schema = OAuth2PasswordBearer(tokenUrl=f"{settings.API_V1_STR}/auth/token")
ALGORITHM = "HS256"


async def get_current_user(token: Annotated[str, Depends(oauth2_schema)]):
    try:
        paylaod = jwt.decode(token, settings.SECRET_KEY, algorithms=[ALGORITHM])
        username: str = paylaod.get("sub")
        user_id: uuid.UUID = paylaod.get("id")
        is_admin: bool = paylaod.get("is_admin")
        expire = paylaod.get("exp")

        if username is None or user_id is None:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                                detail="Could not validate user")

        if expire is None:
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,
                                detail="No access token supplied")

        return {
            "id": str(user_id),
            "username": username,
            "is_admin": is_admin
        }

    except ExpiredSignatureError:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                            detail="Token expired!")

    except JWTError:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                            detail="Could not validate user")


async def authenticate_user(db: Annotated[AsyncSession, Depends(get_db)],
                            username: str,
                            password: str):
    user = await db.scalar(select(User).where(User.username == username))

    if not user or not bcrypt_context.verify(password, user.hashed_password) or user.is_active == False:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                            detail="Invalid authentication credentials",
                            headers={
                                "WWW-Authenticate": "Bearer"
                            })
    return user


async def create_access_token(username: str,
                              user_id: uuid.UUID,
                              is_admin: bool,
                              expires_delta: timedelta):
    encode = {
        "id": str(user_id),
        "sub": username,
        "is_admin": is_admin,
    }
    expires = datetime.now(timezone.utc) + expires_delta
    encode.update({
        "exp": expires,
    })

    return jwt.encode(encode, settings.SECRET_KEY, algorithm=ALGORITHM)


@router.post("/token")
async def token(db: Annotated[AsyncSession, Depends(get_db)],
                form_data: Annotated[OAuth2PasswordRequestForm, Depends()],) -> Token:
    user = await authenticate_user(db,
                                   form_data.username,
                                   form_data.password)

    token = await create_access_token(user.username,
                                      user.id,
                                      user.is_admin,
                                      expires_delta=timedelta(minutes=20))


    return Token(
        access_token=token
    )


@router.post("/register", status_code=status.HTTP_201_CREATED)
async def create_user(db: Annotated[AsyncSession, Depends(get_db)],
                      create_user: CreateUser,
                      user: dict = Depends(get_current_user)):
    if user["is_admin"]:
        await db.execute(insert(User).values(id=uuid.uuid4(),
                                             username=create_user.username,
                                             hashed_password=bcrypt_context.hash(create_user.password), ))
        await db.commit()

        return {
            "status_code": status.HTTP_201_CREATED,
            "transaction": "Successful",
        }

    raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                        detail="Permission denied")


@router.get("/read_current_user")
async def read_current_user(user: dict = Depends(get_current_user)):
    return user


@router.get("/read_all_users")
async def get_all_users(db: Annotated[AsyncSession, Depends(get_db)], user: dict = Depends(get_current_user)):
    if user["is_admin"]:
        users = await db.scalars(select(User).where(User.is_active == True))

        return users.all()

    raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                        detail="Permission denied")


@router.get("/me/{username}")
async def testing(db: Annotated[AsyncSession, Depends(get_db)], username: str):
    user = await db.scalar(select(User).where(User.username == username))
    return {
        "user": user,
    }
