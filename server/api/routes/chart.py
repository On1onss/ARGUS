import httpx
import json
import ast

from fastapi import APIRouter
from fastapi.responses import StreamingResponse

from config import settings


router = APIRouter(prefix="/charts", tags=["Chart"])


async def get_data(host):
    client = httpx.AsyncClient()
    try:
        async with client.stream('GET', f'http://{host}:8001') as response:
            response.raise_for_status()
            async for chunk in response.aiter_text():
                yield ast.literal_eval(chunk)
    except httpx.HTTPError:
        yield json.dumps({"error": "Host is not available"})



@router.get("/{host}")
async def index(host):
    return {
        "message": host
    }


@router.get("/{host}/chart-data")
async def chart_data(host) -> StreamingResponse:
    response = StreamingResponse(get_data(host), media_type="text/event-stream")
    response.headers["Cache-Control"] = "no-cache"
    response.headers["X-Accel-Buffering"] = "no"

    return response
