from fastapi import APIRouter, Depends, status, HTTPException
from typing import Annotated
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from server.core.db import get_db
from server.models.user import User

router = APIRouter(prefix="/auth", tags=['Auth'])


@router.get("/")
async def get_all_users(db: Annotated[AsyncSession, Depends(get_db)], ):
    users = await db.scalars(select(User).where(User.is_active == True))

    return users.all()
