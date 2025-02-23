import httpx

from fastapi import APIRouter
from fastapi.templating import Jinja2Templates
from fastapi.requests import Request
from fastapi.responses import HTMLResponse, StreamingResponse
from starlette.responses import Response
from pathlib import Path

from server.config import settings


router = APIRouter(prefix="/chart", tags=["Chart"])
# TODO: Replace templates to config.py?
templates = Jinja2Templates(directory=str(Path(settings.BASE_DIR, 'src/pages')))


async def get_data(host):
    async with httpx.AsyncClient() as client:
        response = await client.get(f'http://{host}:8001')
        yield response.json()


@router.get("/{host}", response_class=HTMLResponse)
async def index(request: Request, host) -> Response:
    return templates.TemplateResponse("index.html", {"request": request, "host": host}, )


@router.get("/{host}/chart-data")
async def chart_data(host) -> StreamingResponse:
    response = StreamingResponse(get_data(host), media_type="text/event-stream")
    response.headers["Cache-Control"] = "no-cache"
    response.headers["X-Accel-Buffering"] = "no"

    return response
