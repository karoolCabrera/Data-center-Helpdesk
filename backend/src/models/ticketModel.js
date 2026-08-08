const pool = require('../config/database');

const getAllTickets = async () => {
    const result = await pool.query(
        'SELECT * FROM tickets ORDER BY id ASC'
    );

    return result.rows;
};

const getTicketById = async (id) => {
    const result = await pool.query(
        'SELECT * FROM tickets WHERE id = $1',
        [id]
    );

    return result.rows[0];
};

const createTicket = async (ticket) => {
    const { titulo, descripcion, categoria, prioridad } = ticket;

    const result = await pool.query(
        `INSERT INTO tickets 
        (titulo, descripcion, categoria, prioridad)
        VALUES ($1, $2, $3, $4)
        RETURNING *`,
        [titulo, descripcion, categoria, prioridad]
    );

    return result.rows[0];
};

const updateTicket = async (id, ticket) => {
    const { titulo, descripcion, categoria, prioridad, estado } = ticket;

    const result = await pool.query(
        `UPDATE tickets
        SET titulo = $1,
            descripcion = $2,
            categoria = $3,
            prioridad = $4,
            estado = $5
        WHERE id = $6
        RETURNING *`,
        [titulo, descripcion, categoria, prioridad, estado, id]
    );

    return result.rows[0];
};

const deleteTicket = async (id) => {
    const result = await pool.query(
        'DELETE FROM tickets WHERE id = $1 RETURNING *',
        [id]
    );

    return result.rows[0];
};

module.exports = {
    getAllTickets,
    getTicketById,
    createTicket,
    updateTicket,
    deleteTicket
};