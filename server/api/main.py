from fastapi import APIRouter

from api.routes import auth, chart, pages, health_check

api_router = APIRouter()
api_router.include_router(auth.router)
api_router.include_router(chart.router)
api_router.include_router(pages.router)
api_router.include_router(health_check.router)
