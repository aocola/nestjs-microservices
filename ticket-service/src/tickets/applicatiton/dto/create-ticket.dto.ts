
class CreateTicketPassengerDto {
  name: string;
  lastName: string;
  document: string;
  typeOfDocument: string;
}
export class CreateTicketDto {
    passengers: CreateTicketPassengerDto[];
    flightId: string;
    price: Number;
    paymentMethod:string;
    paymentStatus:string;
    class: string;
    status: string;
    baggageAllowance: Number;
    createdAt: Date;
    updatedAt: Date;
    seats: string[];

/* Reservation creation → pending
  Successful payment → confirmed
  Failed payment or cancellation → canceled
  Check-in done → check-in
  Boarding → boarding
  Passenger boarded the flight → boarded
  Flight in progress → in_flight
  Flight completed → completed */
  }
  

