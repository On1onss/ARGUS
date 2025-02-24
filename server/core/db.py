from typing import Annotated, AsyncGenerator

from fastapi import Depends
from sqlalchemy import select, insert
from passlib.context import CryptContext
from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker, AsyncSession

from server.config import settings
from server.models.user import User


engine = create_async_engine(settings.DATABASE_URI, echo=True)
async_session_maker = async_sessionmaker(bind=engine, expire_on_commit=False, class_=AsyncSession)
bcrypt_context = CryptContext(schemes=['bcrypt'], deprecated='auto')


async def get_db() -> AsyncGenerator[AsyncSession, None]:
    async with async_session_maker() as session:
        yield session


async def init_db(db: Annotated[AsyncSession, Depends(get_db)]):
    # Tables should be created with Alembic migrations
    statement = select(User).where(User.username == str(settings.FIRST_SUPERUSER))
    user = await db.scalar(statement=statement)

    if not user:
        await db.execute(insert(User).values(username=settings.FIRST_SUPERUSER,
                                             hashed_password=bcrypt_context.hash(settings.FIRST_SUPERUSER_PASSWORD),
                                             is_active=True,
                                             is_admin=True, ))

        await db.commit()
