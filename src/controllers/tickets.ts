import { Request, Response } from "express";
import ticketsService from "../services/ticketsService";

export default {
  getTickets: async (req: Request, res: Response) => {
    const tickets = await ticketsService.getTickets();
    res.send(tickets);
  },
  getTicketById: async (req: Request, res: Response) => {
    const { id } = req.params;
    const ticket = await ticketsService.getTicketById(Number(id));
    res.send(ticket);
  },
  createTicket: async (req: Request, res: Response) => {
    const ticket = req.body;
    const newTicket = await ticketsService.createTicket(ticket);
    res.send(newTicket);
  },
  updateTicket: async (req: Request, res: Response) => {
    const { id } = req.params;
    const ticket = req.body;
    const updatedTicket = await ticketsService.updateTicket(Number(id), ticket);
    res.send(updatedTicket);
  },
  deleteTicket: async (req: Request, res: Response) => {
    const { id } = req.params;
    await ticketsService.deleteTicket(Number(id));
    res.send("Ticket deleted");
  },
};
