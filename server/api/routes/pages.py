from pathlib import Path

from fastapi import APIRouter
from fastapi.templating import Jinja2Templates
from fastapi.requests import Request
from fastapi.responses import Response, HTMLResponse

from config import settings
from api.routes.auth import get_current_user

router = APIRouter(tags=["Welcome Page"])
templates = Jinja2Templates(directory=str(Path(settings.BASE_DIR, 'src/pages/')))


@router.get("/login", response_class=HTMLResponse)
async def login(request: Request) -> Response:
    return templates.TemplateResponse("home/login.html", {"request": request, }, )


@router.get("/profile")
async def profile(request: Request) -> dict:
    token = request.cookies.get("token").split()
    user = await get_current_user(token[1])

    if user["is_admin"]:
        return {
            "message": "Hello",
        }

