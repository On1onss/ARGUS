import logging
import sys
from typing import Annotated

import uvicorn

from fastapi import FastAPI, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from starlette.responses import RedirectResponse
from starlette.staticfiles import StaticFiles

from api.main import api_router
from config import settings
from core.db import init_db, get_db

logging.basicConfig(stream=sys.stdout, level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
logger = logging.getLogger(__name__)


app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
    version=settings.VERSION,
    description=settings.DESCRIPTION,
)

app.mount("/static", StaticFiles(directory="src/static"))

# TODO: Refactor to lifespan?
# @app.on_event("startup")
# def on_startup():
#     db = Annotated[AsyncSession, Depends(get_db)]
#     try:
#         init_db(db)
#     except ValueError:
#         pass


@app.get("/", response_class=RedirectResponse, status_code=302)
async def welcome():
    return "/api/v1/login"

app.include_router(api_router, prefix=settings.API_V1_STR)

if __name__ == "__main__":
    uvicorn.run("main:app", port=8000, host="0.0.0.0", reload=True)
