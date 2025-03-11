import logging
import sys
from typing import Annotated

import uvicorn

from fastapi import FastAPI, Depends
from fastapi.exceptions import HTTPException
from fastapi.responses import RedirectResponse
from fastapi.staticfiles import StaticFiles
from fastapi.requests import Request
from fastapi.middleware.cors import  CORSMiddleware
from sqlalchemy.ext.asyncio import AsyncSession

from api.main import api_router
from config import settings, templates
from core.db import init_db, get_db

logging.basicConfig(stream=sys.stdout, level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
logger = logging.getLogger(__name__)

origins = ['http://localhost:5173']

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
#         return response
#     elif response.status_code == 401:
#         return templates.TemplateResponse('home/login_fail.html', {'request': request})
#     elif response.status_code == 403:
#         return templates.TemplateResponse('home/403.html', {'request': request})
#     elif response.status_code == 404:
#         return templates.TemplateResponse('home/404.html', {'request': request})
#     elif response.status_code == 500:
#         return templates.TemplateResponse('home/500.html', {
#             'request': request,
#             # 'detail': response
#         })
#     else:
#         # Generic error page
#         return templates.TemplateResponse('home/error.html', {
#             'request': request,
#             # 'detail': response
#         })

app.include_router(api_router, prefix=settings.API_V1_STR)

if __name__ == "__main__":
    uvicorn.run("main:app", port=8000, host="0.0.0.0", reload=True)
