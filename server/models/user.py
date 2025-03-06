from sqlalchemy import Column, String, Boolean, Uuid

from models.base import Base


class User(Base):

    __tablename__ = 'users'

    id = Column(Uuid, primary_key=True, unique=True)
    username = Column(String, unique=True)
    hashed_password = Column(String)
    is_active = Column(Boolean, default=True)
    is_admin = Column(Boolean, default=False)
