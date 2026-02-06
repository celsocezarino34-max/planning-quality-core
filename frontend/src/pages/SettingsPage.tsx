export default function SettingsPage() {
  return (
    <div className="page">
      <h1>Configurações</h1>
      <p className="muted">
        Preferências do usuário (tema, idioma PT/EN depois, etc.).
      </p>

      <div className="card">
        <div className="card-title">Tema</div>
        <div className="card-value">Alternável no topo (Header)</div>
      </div>
    </div>
  );
}
