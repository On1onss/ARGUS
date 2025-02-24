from fastapi import APIRouter

from api.routes import auth, chart

api_router = APIRouter()
api_router.include_router(auth.router)
api_router.include_router(chart.router)
