function TicketList() {
  return (
    <section id="tickets" className="card">
      <div className="section-header">
        <h2>Tickets registrados</h2>
        <p>Listado de incidencias reportadas.</p>
      </div>

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
            <tr>
              <td colSpan="6" className="empty-message">
                No hay tickets registrados.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default TicketList;