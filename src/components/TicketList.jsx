import { useEffect, useState } from "react";
import { getTickets, updateTicket, deleteTicket } from "../services/api";

function TicketList({ refreshTickets, onTicketUpdated }) {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const cargarTickets = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getTickets();
      setTickets(data);
    } catch (error) {
      console.error(error);
      setError("No se pudieron cargar los tickets.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarTickets();
  }, [refreshTickets]);

  const cambiarEstado = async (ticket, estado) => {
    try {
      await updateTicket(ticket.id, {
        titulo: ticket.titulo,
        descripcion: ticket.descripcion,
        categoria: ticket.categoria,
        prioridad: ticket.prioridad,
        estado: estado,
      });

      await cargarTickets();

      if (onTicketUpdated) {
        onTicketUpdated();
      }
    } catch (error) {
      console.error(error);
      alert("No se pudo actualizar el estado.");
    }
  };

  const eliminarTicket = async (id) => {
    const confirmar = window.confirm(
      "¿Estás seguro de eliminar este ticket?"
    );

    if (!confirmar) return;

    try {
      await deleteTicket(id);
      await cargarTickets();

      if (onTicketUpdated) {
        onTicketUpdated();
      }
    } catch (error) {
      console.error(error);
      alert("No se pudo eliminar el ticket.");
    }
  };

  if (loading) {
    return (
      <section id="tickets" className="card">
        <h2>Tickets registrados</h2>
        <p>Cargando tickets...</p>
      </section>
    );
  }

  return (
    <section id="tickets" className="card">
      <div className="section-header">
        <h2>Tickets registrados</h2>
        <p>Listado de incidencias reportadas.</p>
      </div>

      {error && <p className="error-message">{error}</p>}

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Categoría</th>
              <th>Prioridad</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {tickets.length === 0 ? (
              <tr>
                <td colSpan="6" className="empty-message">
                  No hay tickets registrados.
                </td>
              </tr>
            ) : (
              tickets.map((ticket) => (
                <tr key={ticket.id}>
                  <td>{ticket.id}</td>
                  <td>{ticket.titulo}</td>
                  <td>{ticket.categoria}</td>
                  <td>{ticket.prioridad}</td>

                  <td>
                    <select
                      value={ticket.estado}
                      onChange={(e) =>
                        cambiarEstado(ticket, e.target.value)
                      }
                    >
                      <option value="Abierto">Abierto</option>
                      <option value="En Progreso">En Progreso</option>
                      <option value="Cerrado">Cerrado</option>
                    </select>
                  </td>

                  <td>
                    <button
                      className="btn-danger"
                      onClick={() => eliminarTicket(ticket.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default TicketList;