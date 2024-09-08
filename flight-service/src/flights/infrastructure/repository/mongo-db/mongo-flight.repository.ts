import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CustomInjectable } from 'src/common/dependecy-injection/injectable';
import { Flight } from './schema/flight.schema';
import { FlightRepository } from 'src/flights/domain/repository/flight.repository';
import { FlightAttributes, Flight as FlightEntity } from '../../../domain/entities/flight.entity';

@CustomInjectable()
export class MongoFlightRepository implements FlightRepository {
  constructor(
    @InjectModel(Flight.name) private flightModel: Model<Flight>) {}

  async getFlightsByDate(departureAirport: string, arrivalAirport: string, startDate: Date, endDate: Date): Promise<FlightEntity[]> {
    const documents = await this.flightModel.find({
      departureAirport,
      arrivalAirport,
      departureTime: { $gte: startDate, $lte: endDate }
    }).exec();

    return documents.map(this.mapToEntity);
  }
  async create(flight: FlightAttributes): Promise<FlightEntity> {
    const document = await new this.flightModel(flight).save();
    return this.mapToEntity(document);
  }
  async getById(id: string): Promise<FlightEntity | null> {
    const document = await this.flightModel.findById(id);
    return document ? this.mapToEntity(document) : null;
  }

  async addPassengers(id: string, amount: number): Promise<void> {
      const document = await this.flightModel.findById(id);
      document.availableSeats += amount;
      document.save();
  }

  async getFlightCount(): Promise<number> {
    return this.flightModel.countDocuments().exec();
  }
  
  private mapToEntity(document: any): FlightEntity {
    return new FlightEntity({
      id: document.id,
      flightNumber: document.flightNumber,
      departureAirport: document.departureAirport,
      arrivalAirport: document.arrivalAirport,
      departureTime: document.departureTime,
      arrivalTime: document.arrivalTime,
      aircraftType: document.aircraftType,
      gate: document.gate,
      terminal: document.terminal,
      status: document.status,
      duration: document.duration,
      availableSeats: document.availableSeats,
      numberOfSeats: document.numberOfSeats
    });
  }
}
