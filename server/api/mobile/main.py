from fastapi import APIRouter

from api.mobile.routes import health_check, certs, hosts

api_router_mobile = APIRouter()
api_router_mobile.include_router(certs.router)
api_router_mobile.include_router(hosts.router)
api_router_mobile.include_router(health_check.router)
