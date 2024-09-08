import { Body, Controller, HttpException, HttpStatus, Inject, Post } from '@nestjs/common';
import { CreateTicketService } from 'src/tickets/applicatiton/use-case/create-ticket.service';
import { CreateTicketHttpDto } from './dto/create-ticket-http.dto';
import { ResponseDto } from 'src/common/dto/response.dto';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Controller('tickets')
export class CancelTicketController {
    constructor(private createService: CreateTicketService,@Inject('REDIS_CLIENT') private readonly redisClient: ClientProxy){}

    @Post('cancel')
    async run(@Body() id: string) {
        try{
            return ResponseDto.success(null, "Booked successfully", HttpStatus.OK);
        }catch(error){
            return ResponseDto.error(error, "Error when booking", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}