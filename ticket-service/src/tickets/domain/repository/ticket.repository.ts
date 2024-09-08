import { Ticket, TicketAttributes } from "../entities/ticket.entity";

export abstract class TicketRepository {
    abstract create(ticket: TicketAttributes): Promise<Ticket>;
    abstract getById(id: string): Promise<Ticket | null>;
    abstract cancel(ticketId: string);
    abstract modifyTicket(ticket: TicketAttributes): Promise<object>;
}