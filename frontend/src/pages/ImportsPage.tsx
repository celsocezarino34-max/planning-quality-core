import { useState } from "react";

const API_BASE =
  import.meta.env.VITE_API_BASE || "http://localhost:8000"; // depois trocamos para a URL do Codespaces

export default function ImportsPage() {
  const [file, setFile] = useState<File | null>(null);
  const [msg, setMsg] = useState<string>("");

  async function uploadXER() {
    if (!file) {
      setMsg("Selecione um arquivo .XER primeiro.");
      return;
    }

    const form = new FormData();
    form.append("file", file);

    try {
      setMsg("Enviando...");
      const res = await fetch(`${API_BASE}/import/p6`, {
        method: "POST",
        body: form,
      });

      const text = await res.text();
      if (!res.ok) throw new Error(text);

      setMsg(`✅ Sucesso: ${text}`);
    } catch (e: any) {
      setMsg(`❌ Erro: ${e.message}`);
    }
  }

  return (
    <div className="page">
      <h1>Importações</h1>
      <p className="muted">
        Fonte primária: <b>.XER</b> (Primavera P6). CSV/XLSX ficará como fallback.
      </p>

      <div className="card">
        <div className="card-title">Upload (.XER)</div>

        <input
          type="file"
          accept=".xer"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />

        <div style={{ height: 12 }} />

        <button className="btn primary" onClick={uploadXER}>
          Enviar XER
        </button>

        <div className="muted" style={{ marginTop: 12, whiteSpace: "pre-wrap" }}>
          {msg}
        </div>

        <div className="tiny-muted" style={{ marginTop: 12 }}>
          Dica: configure VITE_API_BASE no arquivo <code>frontend/.env.local</code>.
        </div>
      </div>
    </div>
  );
}
