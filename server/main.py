import logging
import sys
from typing import Annotated

import httpx
import uvicorn

from fastapi import FastAPI, Depends
from fastapi.requests import Request
from fastapi.responses import HTMLResponse, StreamingResponse
from fastapi.templating import Jinja2Templates
from sqlalchemy.ext.asyncio import AsyncSession
from starlette.responses import Response

from server.api.routes import auth
from server.config import settings
from server.core.db import init_db, get_db

logging.basicConfig(stream=sys.stdout, level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
logger = logging.getLogger(__name__)


app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
    version=settings.VERSION,
    description=settings.DESCRIPTION,
)

templates = Jinja2Templates(directory="src/pages")


@app.on_event("startup")
def on_startup():
    db = Annotated[AsyncSession, Depends(get_db)]
    try:
        init_db(db)
    except:
        pass


async def get_data(host):
    async with httpx.AsyncClient() as client:
        response = await client.get(f'http://{host}:8001')
        yield response.json()


@app.get("/")
async def welcome() -> dict:
    return {
        "messasge": "Hello from ARGUS"
    }


@app.get("/{host}", response_class=HTMLResponse)
async def index(request: Request, host) -> Response:
    return templates.TemplateResponse("index.html", {"request": request, "host": host}, )


@app.get("/{host}/chart-data")
async def chart_data(host) -> StreamingResponse:
    response = StreamingResponse(get_data(host), media_type="text/event-stream")
    response.headers["Cache-Control"] = "no-cache"
    response.headers["X-Accel-Buffering"] = "no"

    return response


app.include_router(auth.router)

if __name__ == "__main__":
    uvicorn.run("main:app", port=8000, host="0.0.0.0", reload=True)
