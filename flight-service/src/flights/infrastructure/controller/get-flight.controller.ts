import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { GetFlightService } from 'src/flights/application/flight-case/get-flight.service';
import { GetFlightByIdHttpDto } from './dto/get-flight-http.dto';

@Controller('flights')
export class GetFlightByIdController {
    constructor(private service: GetFlightService){}

    @Get('get/:id')
    async run(@Param() dto: GetFlightByIdHttpDto): Promise<object> {
        try {
            return await this.service.execute(dto.id);
        } catch (error) {
            throw new NotFoundException(error.message);
        }
    }
}