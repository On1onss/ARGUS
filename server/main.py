import logging
import sys
import httpx
import uvicorn

from fastapi import FastAPI
from fastapi.requests import Request
from fastapi.responses import HTMLResponse, StreamingResponse
from fastapi.templating import Jinja2Templates
from starlette.responses import Response

logging.basicConfig(stream=sys.stdout, level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
logger = logging.getLogger(__name__)

app = FastAPI()
templates = Jinja2Templates(directory="src/pages")


async def get_data(host):
    async with httpx.AsyncClient() as client:
        response = await client.get(f'http://{host}:8001')
        yield response.json()


@app.get("/{host}", response_class=HTMLResponse)
async def index(request: Request, host) -> Response:
    return templates.TemplateResponse("index.html", {"request": request, "host": host}, )


@app.get("/{host}/chart-data")
async def chart_data(host) -> StreamingResponse:
    response = StreamingResponse(get_data(host), media_type="text/event-stream")
    response.headers["Cache-Control"] = "no-cache"
    response.headers["X-Accel-Buffering"] = "no"

    return response


if __name__ == "__main__":
    uvicorn.run("main:app", port=8000, host="0.0.0.0")
