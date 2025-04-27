from datetime import datetime
import json
import httpx
import time

from fastapi import APIRouter


router = APIRouter(prefix="/health_check", tags=["Mobile"])


@router.get("/health_check/{host}")
def health_check(host):
    t0 = time.time()
    try:
        response = httpx.head(f'http://{host}/')
        # if response.json()["error"]:
        #     return json.dumps({"error": "Host is not available"})
        result = {
            "status code": response.status_code,
            "value": f"{(time.time() - t0)*1000:.1f}",
            "time": datetime.now().strftime("%H:%M:%S")
        }
        return result
    except httpx.HTTPError:
        return {"error": "Host is not available"}


