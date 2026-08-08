const ticketModel = require('../models/ticketModel');

const getTickets = async (req, res) => {
    try {
        const tickets = await ticketModel.getAllTickets();

        res.json(tickets);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            mensaje: 'Error al obtener los tickets'
        });
    }
};

const getTicket = async (req, res) => {
    try {
        const { id } = req.params;

        const ticket = await ticketModel.getTicketById(id);

        if (!ticket) {
            return res.status(404).json({
                mensaje: 'Ticket no encontrado'
            });
        }

        res.json(ticket);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            mensaje: 'Error al obtener el ticket'
        });
    }
};

const createTicket = async (req, res) => {
    try {
        const { titulo, descripcion, categoria, prioridad } = req.body;

        if (!titulo || !descripcion || !categoria || !prioridad) {
            return res.status(400).json({
                mensaje: 'Todos los campos son obligatorios'
            });
        }

        const ticket = await ticketModel.createTicket(req.body);

        res.status(201).json(ticket);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            mensaje: 'Error al crear el ticket'
        });
    }
};

const updateTicket = async (req, res) => {
    try {
        const { id } = req.params;

        const ticket = await ticketModel.updateTicket(id, req.body);

        if (!ticket) {
            return res.status(404).json({
                mensaje: 'Ticket no encontrado'
            });
        }

        res.json(ticket);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            mensaje: 'Error al actualizar el ticket'
        });
    }
};

const deleteTicket = async (req, res) => {
    try {
        const { id } = req.params;

        const ticket = await ticketModel.deleteTicket(id);

        if (!ticket) {
            return res.status(404).json({
                mensaje: 'Ticket no encontrado'
            });
        }

        res.json({
            mensaje: 'Ticket eliminado correctamente',
            ticket
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            mensaje: 'Error al eliminar el ticket'
        });
    }
};

module.exports = {
    getTickets,
    getTicket,
    createTicket,
    updateTicket,
    deleteTicket
};