import {
    IsAlpha,
    IsAlphanumeric,
    IsDate,
    IsEmail,
    isNotEmpty,
    IsNotEmpty,
    IsNumber,
  } from 'class-validator';
  
  class PassengerDto {

    @IsNotEmpty()
    @IsAlpha()
    name: string;

    @IsNotEmpty()
    @IsAlpha()
    lastName: string;

    @IsNotEmpty()
    @IsAlphanumeric()
    document: string;

    @IsAlpha()
    @IsNotEmpty()
    typeOfDocument: string;
  }

  export class CreateTicketHttpDto {
    @IsAlphanumeric()
    @IsNotEmpty()
    flightId: string;

    @IsNotEmpty()
    passengers: PassengerDto[];

    @IsNumber()
    @IsNotEmpty()
    price: Number;

    @IsAlphanumeric()
    @IsNotEmpty()
    paymentMethod: string;

    @IsEmail()
    @IsNotEmpty()
    paymentStatus: string;
    
    @IsAlphanumeric()
    @IsNotEmpty()
    cardNumber: string;

    @IsAlphanumeric()
    @IsNotEmpty()
    cardName: string;

    @IsAlphanumeric()
    @IsNotEmpty()
    cardExpDate: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @IsAlpha()
    class: string;

    @IsNotEmpty()
    @IsAlpha()
    status: string;

    @IsNotEmpty()
    @IsAlphanumeric()
    seats: string[];
    
    @IsNotEmpty()
    @IsNumber()
    baggageAllowance: Number;

    @IsNotEmpty()
    @IsDate()
    createdAt: Date;

    
    @IsNotEmpty()
    @IsDate()
    updatedAt: Date;
}
  