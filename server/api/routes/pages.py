from fastapi import APIRouter, HTTPException, Depends
from fastapi.requests import Request

from config import settings
from api.routes.auth import get_current_user
from starlette import status

router = APIRouter(tags=["Pages"])


@router.get("/login")
async def login(request: Request):# -> Response:
    return {
        "message": "login"
    }


@router.get("/profile")
async def profile(user: dict = Depends(get_current_user)):
    if user["is_admin"]:
        return {
            "message": "profile"
        }

    raise HTTPException(status_code=status.HTTP_403_FORBIDDEN,
                        detail="Access denied")


@router.get("/dashboard")
async def profile(user: dict = Depends(get_current_user)):
    if user["is_admin"]:
        return {"message": "Dashboard"}

    raise HTTPException(status_code=status.HTTP_403_FORBIDDEN,
                        detail="Access denied")

