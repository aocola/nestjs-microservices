import { CustomInjectable } from "src/common/dependecy-injection/injectable";
import { FlightNotFoundException } from "src/flights/domain/exceptions/flight-not-found";
import { FlightRepository } from "src/flights/domain/repository/flight.repository";

@CustomInjectable()
export class GetFlightService {
    constructor(private readonly flightRepository: FlightRepository){}

    async execute(id: string): Promise<object> {
        const flight = await this.flightRepository.getById(id);
        if(!flight) {
            throw new FlightNotFoundException(id);
        }
        return flight.toValue();
    }
}