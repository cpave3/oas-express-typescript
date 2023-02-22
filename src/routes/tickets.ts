import ticketsController from "../controllers/tickets";
import { Router } from "express";

const router = Router();

router.post("/", ticketsController.createTicket);
router.get("/", ticketsController.getTickets);
router.get("/:id", ticketsController.getTicketById);
router.put("/:id", ticketsController.updateTicket);
router.delete("/:id", ticketsController.deleteTicket);

export default router;
