import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

@Schema()
export class Payment {
    @Prop({ required: true })
    ticketId: string;

    @Prop({ required: true })
    price: Number;

    @Prop({ required: true })
    currency: string;

    @Prop({ required: true })
    paymentMethod:string;

    @Prop({ required: true })
    paymentStatus:string;

    @Prop({ required: true })
    cardNumber: string;

    @Prop({ required: true })
    cardExpDate: string;

    @Prop({ required: true })
    cardName: string;

    @Prop({ required: true })
    createdAt: Date;

    @Prop({ required: true })
    updatedAt: Date;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);

export type PaymentDocument = HydratedDocument<Payment>;