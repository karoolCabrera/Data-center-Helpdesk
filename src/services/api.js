const API_URL = "http://localhost:3000";

export const getTickets = async () => {
  const response = await fetch(`${API_URL}/tickets`);

  if (!response.ok) {
    throw new Error("Error al obtener los tickets");
  }

  return response.json();
};

export const createTicket = async (ticket) => {
  const response = await fetch(`${API_URL}/tickets`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ticket),
  });

  if (!response.ok) {
    throw new Error("Error al crear el ticket");
  }

  return response.json();
};

export const updateTicket = async (id, data) => {
  const response = await fetch(`${API_URL}/tickets/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Error al actualizar el ticket");
  }

  return response.json();
};

export const deleteTicket = async (id) => {
  const response = await fetch(`${API_URL}/tickets/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Error al eliminar el ticket");
  }

  return response.json();
};