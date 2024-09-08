export interface PaymentAttributes {
    id?: string;
    ticketId: string;
    price: Number;
    currency: string;
    paymentMethod:string;
    paymentStatus:string;
    cardNumber: string;
    cardExpDate: string;
    cardName: string;
    createdAt: Date;
    updatedAt: Date;
}


export class Payment {
    constructor(private attributes: PaymentAttributes){}

    static create(createPayment: {
        ticketId: string;
        price: Number;
        currency: string;
        paymentMethod:string;
        paymentStatus:string;
        cardNumber: string;
        cardExpDate: string;
        cardName: string;
        createdAt: Date;
        updatedAt: Date;
    }): PaymentAttributes {
        return {
            ticketId: createPayment.ticketId,
            price: createPayment.price,
            currency: createPayment.currency,
            paymentMethod: createPayment.paymentMethod,
            paymentStatus: "PENDING",
            cardExpDate: createPayment.cardExpDate,
            cardName: createPayment.cardName,
            cardNumber: createPayment.cardNumber,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
    }

    toValue(): PaymentAttributes {
        return {
            id: this.attributes.id,
            ticketId: this.attributes.ticketId,
            price: this.attributes.price,
            currency: this.attributes.currency,
            paymentMethod: this.attributes.paymentMethod,
            paymentStatus: this.attributes.paymentStatus,
            cardExpDate: this.attributes.cardExpDate,
            cardName: this.attributes.cardName,
            cardNumber: this.attributes.cardNumber,
            createdAt: this.attributes.createdAt,
            updatedAt: this.attributes.updatedAt,
        };
    }
}
