import logging
import sys
from typing import Annotated

import uvicorn

from fastapi import FastAPI, Depends
from fastapi.requests import Request
from fastapi.middleware.cors import  CORSMiddleware
from sqlalchemy.ext.asyncio import AsyncSession

from api.main import api_router
from api.mobile.main import api_router_mobile
from config import settings
from core.db import init_db, get_db

logging.basicConfig(stream=sys.stdout, level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
logger = logging.getLogger(__name__)

origins = ['http://localhost:5173',]
app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
    version=settings.VERSION,
    description=settings.DESCRIPTION,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# TODO: Refactor to lifespan?
# @app.on_event("startup")
# def on_startup():
#     db = Annotated[AsyncSession, Depends(get_db)]
#     try:
#         init_db(db)
#     except ValueError:
#         pass


@app.get("/")
async def welcome():
    return {
        "message": "Hello from ARGUS!"
    }

# TODO: Change or delete?
# @app.middleware("http")
# async def exception_handler(request: Request, call_next):
#     response = await call_next(request)
#     if response.status_code == 200 or response.status_code == 302:
#         return {
#             'request': request,
#         }
#     elif response.status_code == 401:
#         return {
#             'request': request,
#         }
#     elif response.status_code == 403:
#         return {
#             'request': request,
#         }
#     elif response.status_code == 404:
#         return {
#             'request': request,
#         }
#     elif response.status_code == 500:
#         return {
#             'request': request
#         }
#     else:
#         # Generic error page
#         return {
#             'request': request,
#         }

app.include_router(api_router, prefix=settings.API_V1_STR)
app.include_router(api_router_mobile, prefix=settings.API_V2_STR)

if __name__ == "__main__":
    uvicorn.run("main:app",
                port=8000,
                host="0.0.0.0",
                reload=True)
                # ssl_keyfile="key.pem",
                # ssl_certfile="cert.pem")


