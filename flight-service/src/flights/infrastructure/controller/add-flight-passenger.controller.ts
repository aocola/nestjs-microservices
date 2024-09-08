import { Body, Controller, Post } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { AddFlightPassengersService } from 'src/flights/application/flight-case/add-flight-passengers.service';
import { AddFlightPassengersHttpDto } from './dto/add-passengers-http.dto';


@Controller('flights')
export class AddFlightPassengersController {
    constructor(private service: AddFlightPassengersService){}

    @EventPattern('TicketBooked')
    async handleProcessOrder(@Body() dto: AddFlightPassengersHttpDto): Promise<void> {
        console.log("TicketBooked Order",dto);
        await this.service.execute(dto.id,dto.amount);

    }
}