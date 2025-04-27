import uuid
import aiohttp
import asyncio

import requests
from fastapi import APIRouter, Depends
from typing import Annotated


from sqlalchemy import select, insert, update
from sqlalchemy.ext.asyncio import AsyncSession

from core.db import get_db
from models.host import Host
from config import settings
from schemas import CreateHost

router = APIRouter(prefix="/hosts", tags=["Mobile"])


def check_available(url):
    req = requests.get(url)
    if 200 <= req.status_code < 400:
        return True
    return False


@router.get("/{host}")
async def get_host(host: str,
                   db: Annotated[AsyncSession, Depends(get_db)]):
    host = await db.scalar(select(Host).where(Host.host == host))
    check = check_available("https://" + host.host)
    if check:
        host.available = True
    else:
        host.available = False

    return host


@router.get("/")
async def get_all_hosts(db: Annotated[AsyncSession, Depends(get_db)]):
    hosts = await db.scalars(select(Host))
    # return_list = []
    #
    # for host in hosts.all():
    #     return_list.append(host)
    #
    # for host in return_list:
    #     check = check_available("https://" + host.host)
    #     if check:
    #         host.available = True
    #     else:
    #         host.available = False

    return {"hosts": hosts.all()}



@router.post("/")
async def create_host(db: Annotated[AsyncSession, Depends(get_db)],
                      host: CreateHost):
    await db.execute(insert(Host).values(id=uuid.uuid4(),
                                         host=host.host,
                                         description=host.description))
    await db.commit()

    return {
        "message": "ok",
    }


@router.post("/{host}")
async def update_host(db: Annotated[AsyncSession, Depends(get_db)],
                          host: str,
                          update_host: CreateHost):
    if update_host.description != '':
        await db.execute(update(Host).where(Host.host == host).values(description=update_host.description))

    if update_host.last_visit != '':
        await db.execute(update(Host).where(Host.host == update_host.host).values(last_visit=update_host.last_visit))

    await db.commit()


    return {
        "message": "ok",
    }


@router.delete("/{host}")
async def delete_host(host: str,
                      db: Annotated[AsyncSession, Depends(get_db)]):
    host = await db.scalar(select(Host).where(Host.host == host))
    await db.delete(host)
    await db.commit()

    return {
        "message": "ok",
    }

