import { CustomInjectable } from 'src/common/dependecy-injection/Injectable';
import { Ticket, TicketAttributes } from 'src/tickets/domain/entities/ticket.entity';
import { TicketRepository } from 'src/tickets/domain/repository/ticket.repository';
import { v4 as uuidv4 } from 'uuid';



@CustomInjectable()
export class InMemoryTicketRepository implements TicketRepository {
    
    private ticketInMemory: TicketAttributes[] = [];

    async create(ticket: TicketAttributes): Promise<Ticket> {
        const id = uuidv4();
        const model = new Ticket({ ...ticket, id:id });
        this.ticketInMemory.push(model.toValue());
        return model;
    }

    async getById(id: string): Promise<Ticket | null> {
        const ticket = this.ticketInMemory.find((ticket) => ticket.id === id);
        return ticket ? new Ticket(ticket) : null;
    }

    async cancel(ticketId: string) {
        const ticket = this.ticketInMemory.find((ticket)=>{ticket.id === ticketId });
        if(ticket){
            ticket.status = "Canceled";
        }
    }

    async modifyTicket(ticket: TicketAttributes): Promise<object> {
        const index =  this.ticketInMemory.findIndex(item => item.id === ticket.id);
        if (index !== -1) {
            this.ticketInMemory[index] = ticket;
          }
        return ticket;
    }
}
