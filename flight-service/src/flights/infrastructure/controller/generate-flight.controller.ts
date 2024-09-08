import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Post } from '@nestjs/common';
import { GetFlightService } from 'src/flights/application/flight-case/get-flight.service';
import { GetFlightByIdHttpDto } from './dto/get-flight-http.dto';
import { GenerateFlightService } from 'src/flights/application/flight-case/generate-flights.service';
import { CreateFlightService } from 'src/flights/application/flight-case/create-flight.service';
import { ResponseDto } from 'src/common/dto/response.dto';
import { GenerateFlightHttpDto } from './dto/generate-flight-http.dto';
import { CountFlightService } from 'src/flights/application/flight-case/count-flights.service';

@Controller('flights')
export class GenerateFlightController {
    constructor(private service: GenerateFlightService, private createService: CreateFlightService, private countService: CountFlightService){}

    @Post('generate')
    async run(@Body() dto: GenerateFlightHttpDto): Promise<object> {
        try {
            const airports = [
                { airportCode: 'LHR' }, 
                { airportCode: 'JFK' },
                { airportCode: 'LIM' }, 
                { airportCode: 'CUZ' }
              ];
              
              const countFlights = await this.countService.execute()
              if(countFlights > 0 ){
                return ResponseDto.success({numberOfFlights: countFlights},"Task has already completed", HttpStatus.OK);
              }
              const flights = this.service.execute(airports, dto.minFlights, dto.maxFlights, dto.months);
              flights.forEach(async flight=>{
                await this.createService.execute(flight);
              });

            return ResponseDto.success({numberOfFlights: flights.length},"Task completed", HttpStatus.OK);
        } catch (error) {
            throw new NotFoundException(error.message);
        }
    }
}