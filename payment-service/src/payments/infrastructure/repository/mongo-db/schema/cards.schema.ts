import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


@Schema()
export class Card {
    @Prop({required:true})
    cardNumber : string;

    @Prop({required:true})
    cardName : string;

    @Prop({required:true})
    cardExpDate : string;

    @Prop({required: true})
    status: boolean;
}


export const CardSchema = SchemaFactory.createForClass(Card);

export type CardDocument = HydratedDocument<Card>;