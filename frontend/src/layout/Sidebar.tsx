export function Sidebar() {
  return (
    <aside
      style={{
        width: 220,
        background: "#1e293b",
        color: "#fff",
        padding: 20,
      }}
    >
      <h3>PlanIQ</h3>

      <nav style={{ marginTop: 20 }}>
        <p>📊 Dashboard</p>
        <p>📥 Importação</p>
        <p>📈 Curva S</p>
        <p>⚙️ Configurações</p>
      </nav>
    </aside>
  );
}
