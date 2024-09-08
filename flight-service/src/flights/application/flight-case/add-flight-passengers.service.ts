import { CustomInjectable } from "src/common/dependecy-injection/injectable";
import { CreateFlightDto } from "../dto/create-flight.dto";
import { Flight } from "src/flights/domain/entities/flight.entity";
import { FlightRepository } from "src/flights/domain/repository/flight.repository";

@CustomInjectable()
export class AddFlightPassengersService {
    constructor(private readonly flightRepository: FlightRepository){}

    async execute(id:string, amount:number): Promise<void>{
        await this.flightRepository.addPassengers(id,amount);
    }
}