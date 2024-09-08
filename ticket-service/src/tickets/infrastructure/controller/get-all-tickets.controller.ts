import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { GetTicketService } from 'src/tickets/applicatiton/use-case/get-ticket.service';
import { GetTicketByIdHttpDto } from './dto/get-ticket-http.dto';

@Controller('tickets')
export class GetTicketByIdController {
    constructor(private service: GetTicketService){}

    @Get('all')
    async run(@Param() dto: GetTicketByIdHttpDto): Promise<object> {
        try {
            return await this.service.execute(dto.id);
        } catch (error) {
            throw new NotFoundException(error.message);
        }
    }

}