function IncidentForm() {
  return (
    <section id="incidentes" className="card">
      <div className="section-header">
        <h2>Registrar incidente</h2>
        <p>Ingresa la información del problema reportado.</p>
      </div>

      <form className="incident-form">
        <div className="form-group">
          <label htmlFor="titulo">Título</label>
          <input
            id="titulo"
            type="text"
            placeholder="Ej. No puedo iniciar sesión"
          />
        </div>

        <div className="form-group">
          <label htmlFor="descripcion">Descripción</label>
          <textarea
            id="descripcion"
            rows="4"
            placeholder="Describe el problema..."
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="categoria">Categoría</label>
            <select id="categoria">
              <option value="">Seleccionar</option>
              <option value="Red">Red</option>
              <option value="Hardware">Hardware</option>
              <option value="Software">Software</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="prioridad">Prioridad</label>
            <select id="prioridad">
              <option value="">Seleccionar</option>
              <option value="Alta">Alta</option>
              <option value="Media">Media</option>
              <option value="Baja">Baja</option>
            </select>
          </div>
        </div>

        <button type="submit" className="btn-primary">
          Registrar incidente
        </button>
      </form>
    </section>
  );
}

export default IncidentForm;