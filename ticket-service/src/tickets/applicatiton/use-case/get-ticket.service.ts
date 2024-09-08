import { CustomInjectable } from "src/common/dependecy-injection/Injectable";
import { TicketNotFoundException } from "src/tickets/domain/exceptions/ticket-not-found";
import { TicketRepository } from "src/tickets/domain/repository/ticket.repository";

@CustomInjectable()
export class GetTicketService {
    constructor(private readonly ticketRepository: TicketRepository){}

    async execute(id: string): Promise<object> {
        const ticket = await this.ticketRepository.getById(id);
        if(!ticket) {
            throw new TicketNotFoundException(id);
        }
        return ticket.toValue();
    }
}