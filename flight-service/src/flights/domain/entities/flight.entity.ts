export interface FlightAttributes {
    id?: string;
    flightNumber: string;
    departureAirport: string;
    arrivalAirport:string;
    departureTime:Date;
    arrivalTime:Date;
    aircraftType: string;
    gate: string;
    terminal: string;
    status: string;
    duration: Number;
    numberOfSeats: Number;
    availableSeats: Number;
}


export class Flight {
    constructor(private attributes: FlightAttributes){}

    static create(createFlight: {
        id?: string;
        flightNumber: string;
        departureAirport: string;
        arrivalAirport:string;
        departureTime:Date;
        arrivalTime:Date;
        aircraftType: string;
        gate: string;
        terminal: string;
        status: string;
        numberOfSeats:Number;
        duration: Number;
    }): FlightAttributes {
        return {
            id: createFlight?.id,
            flightNumber: createFlight.flightNumber,
            departureAirport: createFlight.departureAirport,
            arrivalAirport: createFlight.arrivalAirport,
            departureTime: createFlight.departureTime,
            arrivalTime: createFlight.arrivalTime,
            aircraftType: createFlight.aircraftType,
            gate: createFlight.gate,
            terminal: createFlight.terminal,
            status: createFlight.status,
            duration: createFlight.duration,
            numberOfSeats: createFlight.numberOfSeats,
            availableSeats: 0,
        };
    }

    toValue(): FlightAttributes {
        return {
            id: this.attributes.id,
            flightNumber: this.attributes.flightNumber,
            departureAirport: this.attributes.departureAirport,
            arrivalAirport: this.attributes.arrivalAirport,
            departureTime: this.attributes.departureTime,
            arrivalTime: this.attributes.arrivalTime,
            aircraftType: this.attributes.aircraftType,
            gate: this.attributes.gate,
            terminal: this.attributes.terminal,
            status: this.attributes.status,
            duration: this.attributes.duration,
            availableSeats: this.attributes.availableSeats,
            numberOfSeats: this.attributes.numberOfSeats
        };
    }
}
