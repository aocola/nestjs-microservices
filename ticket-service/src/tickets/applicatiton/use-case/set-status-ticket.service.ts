import { CustomInjectable } from "src/common/dependecy-injection/Injectable";
import { Ticket } from "src/tickets/domain/entities/ticket.entity";
import { TicketRepository } from "src/tickets/domain/repository/ticket.repository";
import { CreateTicketDto } from "../dto/create-ticket.dto";

@CustomInjectable()
export class SetStatusTicketService {
    constructor(private readonly ticketRepository: TicketRepository){}

    async execute(dto: CreateTicketDto, status: string) :   Promise<object> {
        dto.status=status;
        dto.paymentStatus="Completed"
        dto.updatedAt=new Date();
        const newTicket = await this.ticketRepository.modifyTicket(dto);
        return newTicket;
    }
}