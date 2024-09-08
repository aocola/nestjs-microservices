import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

// Subesquema para los pasajeros
@Schema()
export class Passenger {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  document: string;

  @Prop({ required: true })
  typeOfDocument: string;
  
}

export const PassengerSchema = SchemaFactory.createForClass(Passenger);