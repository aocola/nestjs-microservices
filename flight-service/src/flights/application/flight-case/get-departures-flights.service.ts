import { CustomInjectable } from "src/common/dependecy-injection/injectable";
import { Departure } from "src/flights/domain/entities/departure.entity";
import { FlightRepository } from "src/flights/domain/repository/flight.repository";

@CustomInjectable()
export class GetDepartureFlightsService {
    constructor(private readonly flightRepository: FlightRepository){}

    async execute(): Promise<object[]>{
        return await this.flightRepository.getDepartureFlights();
    }
}