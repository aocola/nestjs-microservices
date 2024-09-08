import { Controller, Get, Query } from '@nestjs/common';
import { GetFlightByDateService } from 'src/flights/application/flight-case/get-flightByDate.service';

@Controller('flights')
export class GetFlightByDateController {
  constructor(private readonly flightService: GetFlightByDateService) {}

  @Get('available')
  run(
    @Query('departureAirport') departureAirport: string,
    @Query('arrivalAirport') arrivalAirport: string,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string
  ) {
    console.log("available",departureAirport,arrivalAirport,startDate,endDate);
    return this.flightService.execute(
      departureAirport,
      arrivalAirport,
      new Date(startDate),
      new Date(endDate)
    );
  }
}