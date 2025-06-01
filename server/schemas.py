from uuid import UUID

from pydantic import BaseModel


class CreateHost(BaseModel):
    host: str
    description: str
    last_visit: str

class User(BaseModel):
    id: UUID
    username: str
    is_activ: bool
    is_admin: bool

class CreateUser(BaseModel):
    username: str
    password: str


class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"
