import * as moment from "moment";
import { lastValueFrom } from "rxjs";
import { CustomInjectable } from 'src/common/dependecy-injection/injectable';
import { Flight, FlightAttributes } from 'src/flights/domain/entities/flight.entity';
import { FlightRepository } from 'src/flights/domain/repository/flight.repository';
import { v4 as uuidv4 } from 'uuid';


@CustomInjectable()
export class InMemoryFlightRepository implements FlightRepository {
  getFlightCount(): Promise<number | null> {
    throw new Error("Method not implemented.");
  }


    private flightInMemory: FlightAttributes[] = [];


    async getFlightsByDate(departureAirport: string, arrivalAirport: string, startDate: Date, endDate: Date): Promise<Flight[]> {
        const start = moment(startDate);
        const end = moment(endDate);
        return this.flightInMemory.filter(flight => {
          const departureTime = moment(flight.departureTime);
          return (
            flight.departureAirport === departureAirport &&
            flight.arrivalAirport === arrivalAirport &&
            departureTime.isBetween(start, end, undefined, '[]')
          );
        }).map(flight=>new Flight(flight));
      };


    async create(flight: FlightAttributes): Promise<Flight> {
        const id = uuidv4();
        const model = new Flight({id, ...flight});
        this.flightInMemory.push(model.toValue());
        return model;
    }

    async getById(id: string): Promise<Flight | null> {
        const flight = this.flightInMemory.find((flight)=>flight.id===id);
        return flight? new Flight(flight): null;
    }

    async addPassengers(id: string, amount: Number): Promise<void> {

        const index =  this.flightInMemory.findIndex(flight => flight.id===id);
        if (index>=0) {
            let availableSeats = this.flightInMemory[index].availableSeats.valueOf() + amount.valueOf();
            this.flightInMemory[index].availableSeats = availableSeats;
          }
    }
    
}