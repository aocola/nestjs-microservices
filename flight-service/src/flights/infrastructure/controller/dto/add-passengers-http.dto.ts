import {
    IsNotEmpty,
    IsNumber,
  } from 'class-validator';
  
  export class AddFlightPassengersHttpDto {
    @IsNotEmpty()
    id: string;
    
    @IsNumber()
    @IsNotEmpty()
    amount: number;
}
  