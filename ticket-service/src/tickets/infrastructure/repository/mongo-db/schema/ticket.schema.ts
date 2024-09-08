import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Passenger, PassengerSchema } from "./passenger.schema";
import { HydratedDocument } from "mongoose";



@Schema()
export class Ticket {
    @Prop({ required: true })
    flightId: string;

    @Prop({ required: true })
    price: string;

    @Prop({ required: true })
    paymentMethod: string;

    @Prop({ required: true })
    paymentStatus: string;

    @Prop({ required: true })
    class: string;

    @Prop({ required: true })
    status: string;

    @Prop({ required: true })
    baggageAllowance: string;

    @Prop({ required: true })
    createdAt: string;

    @Prop({ required: true })
    updatedAt: string;

    @Prop({ required: true})
    seats: string[];

    @Prop({ type: [PassengerSchema], required: true })
    passengers: Passenger[];
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);

export type TicketDocument = HydratedDocument<Ticket>;