from fastapi import FastAPI

from backend.app.api.health import router as health_router
from backend.app.api.import_p6 import router as import_router

app = FastAPI(
    title="Planning Quality Core",
    version="0.1.0"
)

@app.get("/")
def root():
    return {
        "service": "planning-quality-core",
        "status": "running"
    }

app.include_router(health_router)
app.include_router(import_router)
