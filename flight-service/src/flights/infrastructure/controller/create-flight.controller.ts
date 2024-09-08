import { Body, Controller, Post } from '@nestjs/common';
import { CreateFlightService } from 'src/flights/application/flight-case/create-flight.service';
import { CreateFlightHttpDto } from './dto/create-flight-http.dto';


@Controller('flights')
export class CreateFlightController {
    constructor(private createService: CreateFlightService){}

    @Post()
    async run(@Body() dto: CreateFlightHttpDto): Promise<object> {
        return await this.createService.execute(dto);
    }
}