import {
  isAlphanumeric,
    IsAlphanumeric,
    IsDate,
    isNotEmpty,
    IsNotEmpty,
    IsNumber,
  } from 'class-validator';
  
  export class CreatePaymentHttpDto {
    @IsAlphanumeric()
    @IsNotEmpty()
    ticketId: string;
    
    @IsNumber()
    @IsNotEmpty()
    price: Number;

    @IsAlphanumeric()
    @IsNotEmpty()
    currency: string;

    @IsAlphanumeric()
    @IsNotEmpty()
    paymentMethod: string;

    @IsAlphanumeric()
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
    
    @IsDate()
    createdAt: Date;

    @IsDate()
    updatedAt: Date;
}
  