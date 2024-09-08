export class CreateFlightDto {
    flightNumber: string; // "AA0001",
    departureAirport: string; //"JFK",
    arrivalAirport:string; //"LAX",
    departureTime:Date; //"2024-08-31T14:30:00-05:00"
    arrivalTime:Date; //"2024-08-31T14:30:00-05:00"
    aircraftType: string; //Boeing...
    numberOfSeats: Number;
    availableSeats: Number;
    gate: string; //1,2,3,4,5...
    terminal: string; //B22,B23,B24..
    status: string; //"Scheduled", "Check-in Open", "Check-in Close" "Boarding" "Delayed", "Cancelled", "Departed", "Landed"
    duration: Number; //Hours eg 6.5, What means 6h30min
  }