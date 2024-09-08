import { Flight, FlightAttributes } from "../entities/flight.entity";

export abstract class FlightRepository {
    abstract create(flight: FlightAttributes): Promise<Flight>;
    abstract getById(id: string): Promise<Flight | null>;
    abstract addPassengers(id: string, amount:number): Promise<void>;
    abstract getFlightsByDate(departureAirport:string, arrivalAirport:string, startDate:Date, endDate:Date): Promise<Flight[]>;
    abstract getFlightCount(): Promise<number | null> ;
}