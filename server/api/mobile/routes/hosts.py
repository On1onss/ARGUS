from fastapi import APIRouter

router = APIRouter(prefix="/hosts", tags=["Mobile"])


@router.get("/{host}")
async def get_host(host):
    return {
        "message": host
    }


@router.get("/")
async def get_all_hosts():
    return {"localhost": True}


@router.post("/")
async def create_host(host):
    pass


@router.post("/{host}")
async def update_host(host):
    pass


@router.delete("/{host}")
async def delete_host(host):
    pass

