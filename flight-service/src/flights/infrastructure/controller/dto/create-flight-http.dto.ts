import {
    IsAlpha,
    IsAlphanumeric,
    IsDate,
    IsNotEmpty,
    IsNumber,
  } from 'class-validator';
  
  export class CreateFlightHttpDto {
    @IsNotEmpty()
    flightNumber: string;
    
    @IsAlphanumeric()
    @IsNotEmpty()
    departureAirport: string;

    @IsAlphanumeric()
    @IsNotEmpty()
    arrivalAirport: string;

    @IsDate()
    @IsNotEmpty()
    departureTime: Date;

    @IsDate()
    @IsNotEmpty()
    arrivalTime: Date;

    @IsNotEmpty()
    @IsAlphanumeric()
    aircraftType: string;
    
    @IsNotEmpty()
    @IsAlphanumeric()
    gate: string;
    
    @IsNotEmpty()
    @IsAlphanumeric()
    terminal: string;

    @IsNotEmpty()
    @IsAlpha()
    status: string;

    @IsNotEmpty()
    @IsNumber()
    availableSeats: Number;

    @IsNotEmpty()
    @IsNumber()
    numberOfSeats: Number;

    @IsNotEmpty()
    @IsNumber()
    duration: Number;
}
  