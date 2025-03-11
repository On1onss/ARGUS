from fastapi import APIRouter, HTTPException
from fastapi.requests import Request

from config import settings, templates
from api.routes.auth import get_current_user
from starlette import status

router = APIRouter(tags=["Pages"])


@router.get("/login")
async def login(request: Request):# -> Response:
    return {
        "message": "login"
    }


@router.get("/profile")
async def profile(request: Request):
    token = request.cookies.get("token")

    if not token:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                            detail="Could not validate user")

    token = token.split()
    user = await get_current_user(token[1])

    if user["is_admin"]:
        return {
            "message": "profile"
        }

    raise HTTPException(status_code=status.HTTP_403_FORBIDDEN,
                        detail="Access denied")


@router.get("/dashboard")
async def profile(request: Request):
    token = request.cookies.get("token")

    if not token:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                            detail="Could not validate user")

    token = token.split()
    user = await get_current_user(token[1])

    if user["is_admin"]:
        return {"message": "Dashboard"}

    raise HTTPException(status_code=status.HTTP_403_FORBIDDEN,
                        detail="Access denied")

