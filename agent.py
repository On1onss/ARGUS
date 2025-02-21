import json
import logging
import sys
import psutil
import uvicorn
import socket

from datetime import datetime
from fastapi import FastAPI
from fastapi.requests import Request

hostname = socket.gethostname()
ip_address = socket.gethostbyname(hostname)

logging.basicConfig(stream=sys.stdout, level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s")
logger = logging.getLogger(__name__)

app = FastAPI()


@app.get("/")
async def get_proc(request: Request):
    client_ip = request.client.host

    logger.info("Client %s connected", client_ip)

    json_data = json.dumps(
        {
            "time": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
            "host": f"{hostname} - {ip_address}",
            "value": f"{psutil.virtual_memory()[3] / (1024 * 1024 * 1024):.2f}",
        }
    )
    return f"data:{json_data}\n\n"


if __name__ == "__main__":
    uvicorn.run("agent:app", port=8001, host="0.0.0.0")
