
interface PassengerAttributes {
    name: string;
    lastName: string;
    document: string;
    typeOfDocument: string;
}

export interface TicketAttributes {
    id?: string;
    passengers: PassengerAttributes[];
    flightId: string;
    price: Number; //
    paymentMethod:string; //
    paymentStatus:string; //
    status: string;
    class: string;
    seats: string[];
    baggageAllowance: Number;
    createdAt: Date;
    updatedAt: Date;
}


export class Ticket {
    constructor(private attributes: TicketAttributes){}

    static create(createTicket: {
        id?:string,
        flightId: string;
        passengers: PassengerAttributes[];
        price: Number;
        paymentMethod:string;
        paymentStatus:string;
        seats: string[];
        class: string;
        baggageAllowance: Number;
    }): TicketAttributes {
        return {
            id: createTicket?.id,
            passengers: createTicket.passengers,
            flightId: createTicket.flightId,
            price: createTicket.price,
            paymentMethod: createTicket.paymentMethod,
            paymentStatus: createTicket.paymentStatus,
            class: createTicket.class,
            seats: createTicket.seats,
            status: "Pending",
            baggageAllowance: createTicket.baggageAllowance,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
    }

    toValue(): TicketAttributes {
        return {
            id: this.attributes.id,
            passengers: this.attributes.passengers,
            flightId: this.attributes.flightId,
            price: this.attributes.price,
            paymentMethod: this.attributes.paymentMethod,
            paymentStatus: this.attributes.paymentStatus,
            class: this.attributes.class,
            seats: this.attributes.seats,
            status: this.attributes.status,
            baggageAllowance: this.attributes.baggageAllowance,
            createdAt: this.attributes.createdAt,
            updatedAt: this.attributes.updatedAt,
        };
    }
}
