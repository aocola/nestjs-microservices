import { v4 as uuidv4 } from 'uuid';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Flight {
  
  @Prop({ required: true })
  flightNumber: string;
  
  @Prop({ required: true })
  departureAirport: string;
  
  @Prop({ required: true })
  arrivalAirport: string;
  
  @Prop({ required: true })
  departureTime: Date;
  
  @Prop({ required: true })
  arrivalTime: Date;
  
  @Prop({ required: true })
  aircraftType: string;
  
  @Prop({ required: true })
  gate: string;
  
  @Prop({ required: true })
  terminal: string;
  
  @Prop({ required: true })
  status: string;

  @Prop({ required: true })
  duration: number;

  @Prop({ required: true })
  availableSeats: number;

  @Prop({required: true})
  numberOfSeats: number;
}

export const FlightSchema = SchemaFactory.createForClass(Flight);

export type FlightDocument = HydratedDocument<Flight>;
