import { Body, Controller, HttpException, HttpStatus, Inject, Post } from '@nestjs/common';
import { CreateTicketService } from 'src/tickets/applicatiton/use-case/create-ticket.service';
import { CreateTicketHttpDto } from './dto/create-ticket-http.dto';
import { ResponseDto } from 'src/common/dto/response.dto';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { SetStatusTicketService } from 'src/tickets/applicatiton/use-case/set-status-ticket.service';

@Controller('tickets')
export class CreateTicketController {
    constructor(private createService: CreateTicketService,
                private setStatusTicketService: SetStatusTicketService,
                @Inject('REDIS_CLIENT') private readonly redisClient: ClientProxy){}

    @Post('reserve')
    async run(@Body() dto: CreateTicketHttpDto) {
        try{
            const ticket = await this.createService.execute(dto);
            const response =  this.redisClient.send('TicketReserved', {
                ticketId: (ticket as any).attributes.id ,
                cardNumber: dto.cardNumber,
                 cardName: dto.cardName,
                   cardExpDate: dto.cardExpDate,
                   price: dto.price,
                   currency: "USD",
                   paymentMethod: dto.paymentMethod
                });
            const {httpStatus, message,error} = await lastValueFrom(response);
            if(httpStatus!==200){
                throw Error(`${error} ${message}`);
            }
            const ticketStatus = await this.setStatusTicketService.execute((ticket as any).attributes,"Booked");
            //Validar Usuario
            //Validar pago
            this.redisClient.emit('TicketBooked', {id: dto.flightId, amount: dto.passengers.length});
            return ResponseDto.success(ticketStatus, "Booked successfully", HttpStatus.OK);
        }catch(error){
            return ResponseDto.error(error, "Error when booking", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}