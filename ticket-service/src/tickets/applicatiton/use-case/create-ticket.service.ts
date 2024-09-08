import { CustomInjectable } from "src/common/dependecy-injection/Injectable";
import { Ticket, TicketAttributes } from "src/tickets/domain/entities/ticket.entity";
import { TicketRepository } from "src/tickets/domain/repository/ticket.repository";
import { CreateTicketDto } from "../dto/create-ticket.dto";
import { Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

@CustomInjectable()
export class CreateTicketService {
    constructor(private readonly ticketRepository: TicketRepository){}

    async execute(dto: CreateTicketDto):  Promise<object> {
        const partialTicket = Ticket.create(dto);
        const ticket = await this.ticketRepository.create(partialTicket);
        return ticket;
    }
}