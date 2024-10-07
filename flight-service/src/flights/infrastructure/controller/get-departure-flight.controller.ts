import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { GetDepartureFlightsService } from 'src/flights/application/flight-case/get-departures-flights.service';

@Controller('flights')
export class GetFlightDeparturesController {
    constructor(private service: GetDepartureFlightsService){}

    @Get('departure')
    async run(): Promise<object> {
        try {
            return await this.service.execute();
        } catch (error) {
            throw new NotFoundException(error.message);
        }
    }
}