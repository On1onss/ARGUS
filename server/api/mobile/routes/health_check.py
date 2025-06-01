from datetime import datetime
import json
import httpx
import time

from fastapi import APIRouter


router = APIRouter(prefix="/health_check", tags=["Mobile"])


@router.get("/{host}")
async def health_check(host):
    t0 = time.time()
    try:
        response = httpx.head(f'https://{host}/')
        # if response.json()["error"]:
        #     return json.dumps({"error": "Host is not available"})
        if 200 <= response.status_code < 400:
            return {"message": "OK"}
        else:
            return {"message": "Bad Request"}
    except httpx.HTTPError:
        return {"message": "Host is not available"}


