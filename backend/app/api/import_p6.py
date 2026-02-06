from fastapi import APIRouter, UploadFile, File, HTTPException
from pathlib import Path
import uuid
import shutil

from backend.app.parsers.parser_xer import parse_xer

router = APIRouter(prefix="/import", tags=["import"])

UPLOAD_DIR = Path("backend/uploads")
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)


@router.post("/p6")
async def import_p6(file: UploadFile = File(...)):
    if not file.filename:
        raise HTTPException(status_code=400, detail="Arquivo não enviado")

    ext = file.filename.lower().split(".")[-1]

    file_id = f"{uuid.uuid4()}.{ext}"
    file_path = UPLOAD_DIR / file_id

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # 🔒 REGRA DE OURO: XER PRIMEIRO
    if ext == "xer":
        parsed = parse_xer(file_path)
        return {
            "source": "XER",
            "status": "parsed",
            "summary": {
                "projects": len(parsed["projects"]),
                "tasks": len(parsed["tasks"]),
                "wbs": len(parsed["wbs"]),
            }
        }

    # Fallback (CSV/XLSX no futuro)
    raise HTTPException(
        status_code=415,
        detail="Formato não suportado. Use preferencialmente arquivo .XER"
    )
