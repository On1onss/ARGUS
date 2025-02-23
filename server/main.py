import logging
import sys
from typing import Annotated

import uvicorn

from fastapi import FastAPI, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from server.api.main import api_router
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


@app.on_event("startup")
def on_startup():
    db = Annotated[AsyncSession, Depends(get_db)]
    try:
        init_db(db)
    except ValueError:
        pass


@app.get("/")
async def welcome() -> dict:
    return {
        "messasge": "Hello from ARGUS"
    }


app.include_router(api_router, prefix=settings.API_V1_STR)

if __name__ == "__main__":
    uvicorn.run("main:app", port=8000, host="0.0.0.0", reload=True)
