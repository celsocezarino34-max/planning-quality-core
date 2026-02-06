from pathlib import Path
from typing import Dict, List


def parse_xer(file_path: Path) -> Dict:
    """
    Parser inicial de arquivo Primavera P6 (.XER)

    Objetivo:
    - Ler XER sem depender de Excel
    - Extrair dados base para staging
    - Evitar erros de locale / formatação

    Retorna:
    {
        "projects": [],
        "tasks": [],
        "wbs": [],
        "raw_tables": {}
    }
    """

    if not file_path.exists():
        raise FileNotFoundError("Arquivo XER não encontrado")

    content = file_path.read_text(encoding="latin-1", errors="ignore")

    tables: Dict[str, List[Dict]] = {}
    current_table = None
    headers = []

    for line in content.splitlines():
        line = line.strip()

        if line.startswith("%T"):
            # Nova tabela
            current_table = line.replace("%T", "").strip()
            tables[current_table] = []
            headers = []

        elif line.startswith("%F"):
            # Cabeçalhos
            headers = line.replace("%F", "").split("\t")

        elif line.startswith("%R") and current_table:
            # Registro
            values = line.replace("%R", "").split("\t")
            record = dict(zip(headers, values))
            tables[current_table].append(record)

    # Extrações principais
    projects = tables.get("PROJECT", [])
    tasks = tables.get("TASK", [])
    wbs = tables.get("PROJWBS", [])

    return {
        "projects": projects,
        "tasks": tasks,
        "wbs": wbs,
        "raw_tables": tables
    }
