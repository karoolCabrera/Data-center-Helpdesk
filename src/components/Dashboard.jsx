import { useEffect, useState } from "react";
import { getTickets } from "../services/api";

function Dashboard({ refreshTickets }) {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const cargarTickets = async () => {
      try {
        const data = await getTickets();
        setTickets(data);
      } catch (error) {
        console.error("Error al cargar estadísticas:", error);
      }
    };

    cargarTickets();
  }, [refreshTickets]);

  const total = tickets.length;

  const abiertos = tickets.filter(
    (ticket) => ticket.estado === "Abierto"
  ).length;

  const enProgreso = tickets.filter(
    (ticket) => ticket.estado === "En Progreso"
  ).length;

  const cerrados = tickets.filter(
    (ticket) => ticket.estado === "Cerrado"
  ).length;

  return (
    <section id="dashboard" className="dashboard">
      <div className="section-header">
        <h1>Dashboard</h1>
        <p>Resumen de incidencias del Data Center</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-title">Total de tickets</span>
          <strong>{total}</strong>
        </div>

        <div className="stat-card">
          <span className="stat-title">Abiertos</span>
          <strong>{abiertos}</strong>
        </div>

        <div className="stat-card">
          <span className="stat-title">En progreso</span>
          <strong>{enProgreso}</strong>
        </div>

        <div className="stat-card">
          <span className="stat-title">Cerrados</span>
          <strong>{cerrados}</strong>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;