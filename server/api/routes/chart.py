import httpx

from fastapi import APIRouter
from fastapi.requests import Request
from fastapi.responses import HTMLResponse, StreamingResponse
from fastapi.responses import Response

from config import settings, templates


router = APIRouter(prefix="/charts", tags=["Chart"])


async def get_data(host):
    async with httpx.AsyncClient() as client:
        response = await client.get(f'http://{host}:8001')
        yield response.json()


@router.get("/{host}", response_class=HTMLResponse)
async def index(request: Request, host) -> Response:
    return templates.TemplateResponse("home/index.html", {"request": request, "host": host}, )


@router.get("/{host}/chart-data")
async def chart_data(host) -> StreamingResponse:
    response = StreamingResponse(get_data(host), media_type="text/event-stream")
    response.headers["Cache-Control"] = "no-cache"
    response.headers["X-Accel-Buffering"] = "no"

    return response
