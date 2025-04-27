from sqlalchemy import Column, String, Uuid, Boolean

from models.base import Base


class Host(Base):

    __tablename__ = 'hosts'

    id = Column(Uuid, primary_key=True, unique=True)
    host = Column(String, unique=True)
    description = Column(String)
    last_visit = Column(String)
    available = Column(Boolean)
