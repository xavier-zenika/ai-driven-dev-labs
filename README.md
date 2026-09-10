# Pet Clinic application

## Setup Instructions

### Prerequisites

1. **Install development tools:**
   - Install VSCode
   - Install Python 3.12+ with the [uv](https://docs.astral.sh/uv/) package manager, and Node.js v22+
   - Install an AI coding assistant of your choice (Copilot, Claude Code, Cursor…)
      > If you are using [GitHub Copilot](.github/copilot-instructions.md), instructions are inside `.github/copilot-instructions.md`  
       > If you are using Claude Code, instructions are inside [CLAUDE.md](CLAUDE.md)

### Running locally

Each application (greenfield and brownfield) has a backend and a frontend. They cannot be run at the
same time as they share the same ports.

**Backend** (runs on `:8000`):
```bash
cd greenfield-backend   # or brownfield-backend
uv run uvicorn petclinic.main:app --reload
```

**Frontend** (runs on `:5173`):
```bash
cd greenfield-frontend  # or brownfield-frontend
npm install
npm run dev
```

### Running Unit Tests

**Backend:**
```bash
cd greenfield-backend   # or brownfield-backend
uv run pytest
```

**Frontend:**
```bash
cd greenfield-frontend  # or brownfield-frontend
npm run test
```

### Running with Docker
If you don't have Python or Node, but you have docker, you can run the applications within docker as well.

Each application (greenfield and brownfield) has its own Docker Compose file. They cannot be run at the same time as they share the same ports.

**Greenfield** (backend on `:8000`, frontend on `:5173`):
```bash
docker compose -f docker-compose.greenfield.yml up
```

**Brownfield** (backend on `:8000`, frontend on `:5173`):
```bash
docker compose -f docker-compose.brownfield.yml up
```

### Running Unit Tests in Docker

With the containers running, use `docker compose exec` to run tests inside each container.

**Greenfield:**
```bash
# Backend
docker compose -f docker-compose.greenfield.yml exec greenfield-backend uv run pytest

# Frontend
docker compose -f docker-compose.greenfield.yml exec greenfield-frontend npm test
```

**Brownfield:**
```bash
# Backend
docker compose -f docker-compose.brownfield.yml exec brownfield-backend uv run pytest

# Frontend
docker compose -f docker-compose.brownfield.yml exec brownfield-frontend npm test
```
