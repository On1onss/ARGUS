import httpx

from datetime import datetime
from fastapi import APIRouter

router = APIRouter(prefix="/health_check", tags=["Health"])


@router.get("/{host}")
async def health_check(host):
    try:
        response = httpx.head(f'http://{host}/', verify=False)

        if 200 <= response.status_code < 400:
            return {
                "message": "OK",
                "value": f"{response.elapsed.total_seconds():.3f}",
                "time": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            }
        else:
            return {"message": "Bad Request"}
    except httpx.HTTPError:
        return {"error": "Host is not available"}
