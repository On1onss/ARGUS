import secrets
import warnings
from typing import Literal
from pathlib import Path

from pydantic import model_validator
from pydantic_settings import BaseSettings, SettingsConfigDict
from typing_extensions import Self


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file="../.env",
        env_ignore_empty=True,
        extra="ignore",
    )

    BASE_DIR: Path = Path(__file__).resolve().parent

    PROJECT_NAME: str
    VERSION: str
    DESCRIPTION: str

    API_V1_STR: str = "/api/v1"
    API_V2_STR: str = "/api/v2"
    SECRET_KEY: str = secrets.token_urlsafe(32)
    # 60 minutes * 24 hours * 8 days = 8 days
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 8
    ENVIRONMENT: Literal["local", "staging", "production"] = "local"

    DATABASE_URI: str
    DB_NAME: str

    FIRST_SUPERUSER: str
    FIRST_SUPERUSER_PASSWORD: str

    def _check_default_secret(self, var_name: str, value: str | None) -> None:
        if value == "changeme":
            message = (
                f'The value of {var_name} is "changeme", '
                "for security, please change it, at least for deployments."
            )
            if self.ENVIRONMENT == "local":
                warnings.warn(message, stacklevel=1)
            else:
                raise ValueError(message)

    @model_validator(mode="after")
    def _enforce_non_default_secrets(self) -> Self:
        self._check_default_secret("SECRET_KEY", self.SECRET_KEY)
        self._check_default_secret("FIRST_SUPERUSER_PASSWORD", self.FIRST_SUPERUSER_PASSWORD)
        self._check_default_secret("FIRST_SUPERUSER", self.FIRST_SUPERUSER)

        return self


settings = Settings()
