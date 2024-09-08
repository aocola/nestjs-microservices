import {
    IsNotEmpty,
    IsNumber,
  } from 'class-validator';
  
  export class GenerateFlightHttpDto {
    @IsNotEmpty()
    minFlights: number;
    
    @IsNumber()
    @IsNotEmpty()
    maxFlights: number;

    @IsNotEmpty()
    @IsNumber()
    months: number;
}
  