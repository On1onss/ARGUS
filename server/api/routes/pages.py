from fastapi import APIRouter, HTTPException
from fastapi.requests import Request
from fastapi.responses import Response, HTMLResponse

from config import settings, templates
from api.routes.auth import get_current_user
from starlette import status

router = APIRouter(tags=["Pages"])


@router.get("/login", response_class=HTMLResponse)
async def login(request: Request) -> Response:
    return templates.TemplateResponse("home/login.html", {"request": request, }, )


@router.get("/profile", response_class=HTMLResponse)
async def profile(request: Request) -> Response:
    token = request.cookies.get("token")

    if not token:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                            detail="Could not validate user")

    token = token.split()
    user = await get_current_user(token[1])

    if user["is_admin"]:
        return templates.TemplateResponse("home/user.html", {"request": request, }, )

    raise HTTPException(status_code=status.HTTP_403_FORBIDDEN,
                        detail="Access denied")


@router.get("/dashboard", response_class=HTMLResponse)
async def profile(request: Request) -> Response:
    token = request.cookies.get("token")

    if not token:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                            detail="Could not validate user")

    token = token.split()
    user = await get_current_user(token[1])

    if user["is_admin"]:
        return templates.TemplateResponse("home/index.html", {"request": request, }, )

    raise HTTPException(status_code=status.HTTP_403_FORBIDDEN,
                        detail="Access denied")

