
<p align="center">
<img src="frontend/src/assets/logo_mini.png" width="300">
</p>
<h1 align="center">ARGUS</h1>

<!--A block of information about the repository in badges-->

<p align="center">

<img src="https://img.shields.io/badge/AKP_INA_TEAM-ARGUS-8A2BE2" >
<img src="https://img.shields.io/github/last-commit/On1onss/ARGUS" >
<img src="https://img.shields.io/github/languages/top/On1onss/ARGUS" >
<img src="https://img.shields.io/github/issues/On1onss/ARGUS" >
<img src="https://img.shields.io/github/license/On1onss/ARGUS" >
<img src="https://img.shields.io/github/stars/On1onss/ARGUS" >

</p>

<!--![Static Badge](https://img.shields.io/badge/AKP_INA_TEAM-ARGUS-8A2BE2)-->
<!--![GitHub last commit](https://img.shields.io/github/last-commit/On1onss/ARGUS)-->
<!--![GitHub top language](https://img.shields.io/github/languages/top/On1onss/ARGUS)-->
<!--![GitHub issues](https://img.shields.io/github/issues/On1onss/ARGUS)-->
<!--![GitHub licence](https://img.shields.io/github/license/On1onss/ARGUS)-->
<!--![GitHub Repo stars](https://img.shields.io/github/stars/On1onss/ARGUS)-->

> [!IMPORTANT]
> _(Automated Real-time Global Universal Surveillance) - Автоматизированная система глобального универсального мониторинга в реальном времени._


# TODO:
- [x] Add structure
- [x] Create agent
- [x] Create server
- [x] Migrate from reqirements.txt to uv
- [x] Refactor server main.py
- [ ] Add Routers
  - [ ] Add auth
    - [x] Add db
    - [x] Add JWT auth
    - [x] Add check expire token
    - [ ] Add crud user
    - [ ] ...
  - [ ] Chart host
    - [x] Add chart route
    - [x] Add check host
    - [ ] ...
  - [ ] Add pages
    - [x] Add login page
    - [ ] Add profile page
    - [x] Add chart page
    - [ ] ...
- [ ] Add frontend
  - [x] Dashboard
  - [ ] Profile
  - [ ] Node
  - [x] Chart
  - [ ] Exception pages
    - [ ] 403 page
    - [ ] 500 page
    - [ ] 404 page
    - [ ] 401 page
    - [ ] ...
  - [ ] ...
- [ ] Add docs
  - [ ] Installation
  - [ ] Create .env
  - [ ] Init DB
  - [ ] ...
- [ ] Refactor README.md
- [ ] ...

___

<!--Docs-->
## _Update .env_
```text
# Environment: local, staging, production
ENVIRONMENT=local

PROJECT_NAME="ARGUS"
VERSION="0.0.1"
DESCRIPTION="Automated Real-time Global Universal Surveillance"
# Backend
SECRET_KEY="changeme" # Change this
FIRST_SUPERUSER="changeme" # Change this
FIRST_SUPERUSER_PASSWORD="changeme" # Change this

# DB
DB_NAME="argus.db"
DATABASE_URI="sqlite+aiosqlite:///argus.db"
```

## _Init DB for server_

```shell
cd server
uv run alembic upgrade head
```

## _Run server_

```shell
uv run server/main.py
```

## _Run agent_

```shell
uv run agent.py
```
...
___





<!--Support-->
## Support
If you have any difficulties or questions about the use, create 
[discussion](https://github.com/On1onss/ARGUS/issues/new/choose) in this repository.
