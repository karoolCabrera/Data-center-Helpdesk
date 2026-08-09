import { useState } from "react";
import { createTicket } from "../services/api";

function sanitizeInput(value) {
  return value.replace(/[<>]/g, "").trim();
}

function IncidentForm({ onTicketCreated }) {
  const [formData, setFormData] = useState({
    titulo: "",
    descripcion: "",
    categoria: "",
    prioridad: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    if (
      !formData.titulo ||
      !formData.descripcion ||
      !formData.categoria ||
      !formData.prioridad
    ) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    const ticket = {
      titulo: sanitizeInput(formData.titulo),
      descripcion: sanitizeInput(formData.descripcion),
      categoria: formData.categoria,
      prioridad: formData.prioridad,
    };

    try {
      setLoading(true);

      await createTicket(ticket);

      setMessage("Incidente registrado correctamente.");

      setFormData({
        titulo: "",
        descripcion: "",
        categoria: "",
        prioridad: "",
      });

      if (onTicketCreated) {
        onTicketCreated();
      }
    } catch (error) {
      console.error(error);
      setError("No se pudo registrar el incidente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="incidentes" className="card">
      <div className="section-header">
        <h2>Registrar incidente</h2>
        <p>Ingresa la información del problema reportado.</p>
      </div>

      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}

      <form className="incident-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="titulo">Título</label>

          <input
            id="titulo"
            name="titulo"
            type="text"
            value={formData.titulo}
            onChange={handleChange}
            placeholder="Ej. No puedo iniciar sesión"
          />
        </div>

        <div className="form-group">
          <label htmlFor="descripcion">Descripción</label>

          <textarea
            id="descripcion"
            name="descripcion"
            rows="4"
            value={formData.descripcion}
            onChange={handleChange}
            placeholder="Describe el problema..."
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="categoria">Categoría</label>

            <select
              id="categoria"
              name="categoria"
              value={formData.categoria}
              onChange={handleChange}
            >
              <option value="">Seleccionar</option>
              <option value="Red">Red</option>
              <option value="Hardware">Hardware</option>
              <option value="Software">Software</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="prioridad">Prioridad</label>

            <select
              id="prioridad"
              name="prioridad"
              value={formData.prioridad}
              onChange={handleChange}
            >
              <option value="">Seleccionar</option>
              <option value="Alta">Alta</option>
              <option value="Media">Media</option>
              <option value="Baja">Baja</option>
            </select>
          </div>
        </div>

        <button type="submit" className="btn-primary" disabled={loading}>
          {loading ? "Registrando..." : "Registrar incidente"}
        </button>
      </form>
    </section>
  );
}

export default IncidentForm;