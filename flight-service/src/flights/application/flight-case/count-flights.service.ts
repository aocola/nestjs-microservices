import { CustomInjectable } from "src/common/dependecy-injection/injectable";
import { FlightRepository } from "src/flights/domain/repository/flight.repository";

@CustomInjectable()
export class CountFlightService {
    constructor(private readonly flightRepository: FlightRepository){}

    async execute(): Promise<number>{
        const count = await this.flightRepository.getFlightCount();
        return count;
    }
}