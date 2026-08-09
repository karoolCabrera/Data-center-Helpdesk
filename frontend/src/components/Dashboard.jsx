function Dashboard() {
  return (
    <section id="dashboard" className="dashboard">
      <div className="section-header">
        <h1>Dashboard</h1>
        <p>Resumen de incidencias del Data Center</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-title">Total de tickets</span>
          <strong>0</strong>
        </div>

        <div className="stat-card">
          <span className="stat-title">Abiertos</span>
          <strong>0</strong>
        </div>

        <div className="stat-card">
          <span className="stat-title">En progreso</span>
          <strong>0</strong>
        </div>

        <div className="stat-card">
          <span className="stat-title">Cerrados</span>
          <strong>0</strong>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;