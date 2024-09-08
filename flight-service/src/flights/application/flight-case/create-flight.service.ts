import { CustomInjectable } from "src/common/dependecy-injection/injectable";
import { CreateFlightDto } from "../dto/create-flight.dto";
import { Flight } from "src/flights/domain/entities/flight.entity";
import { FlightRepository } from "src/flights/domain/repository/flight.repository";

@CustomInjectable()
export class CreateFlightService {
    constructor(private readonly flightRepository: FlightRepository){}

    async execute(dto: CreateFlightDto): Promise<object>{
        const partialFlight = Flight.create(dto);
        const flight = await this.flightRepository.create(partialFlight);
        return flight.toValue();
    }
}