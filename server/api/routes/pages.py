from pathlib import Path

from fastapi import APIRouter
from fastapi.templating import Jinja2Templates
from fastapi.requests import Request
from fastapi.responses import Response

from config import settings
from starlette.responses import HTMLResponse, RedirectResponse, JSONResponse

router = APIRouter(tags=["Welcome Page"])
templates = Jinja2Templates(directory=str(Path(settings.BASE_DIR, 'src/pages/')))


@router.get("/login", response_class=HTMLResponse)
async def index(request: Request) -> Response:
    return templates.TemplateResponse("home/login.html", {"request": request, }, )
