import { CustomInjectable } from "src/common/dependecy-injection/injectable";
import { FlightNotFoundException } from "src/flights/domain/exceptions/flight-not-found";
import { FlightRepository } from "src/flights/domain/repository/flight.repository";

@CustomInjectable()
export class GetFlightByDateService {
    constructor(private readonly flightRepository: FlightRepository){}

    async execute(departureAirport:string, arrivalAirport:string, startDate:Date, endDate:Date): Promise<object> {
        const flights = await this.flightRepository.getFlightsByDate(departureAirport, arrivalAirport, startDate, endDate);
        if(!flights) {
            throw new FlightNotFoundException("");
        }
        return flights.map(e=>e.toValue());
    }
}