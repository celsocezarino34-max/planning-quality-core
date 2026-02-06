export default function DashboardPage() {
  return (
    <div className="page">
      <h1>Dashboard</h1>
      <p className="muted">
        Aqui entraremos com KPIs e cards (Previsto x Realizado, SPI/CPI, desvios,
        alertas).
      </p>

      <div className="grid">
        <div className="card">
          <div className="card-title">Status</div>
          <div className="card-value">Base UI pronta ✅</div>
        </div>
        <div className="card">
          <div className="card-title">Próximo</div>
          <div className="card-value">Curva S (XER)</div>
        </div>
      </div>
    </div>
  );
}
