import { IsAlpha, isAlpha, IsDate, IsNotEmpty, IsUUID } from 'class-validator';

export class GetFlightsByDateHttpDto {
  @IsNotEmpty()
  @IsAlpha()
  departureAirport: string;

  @IsNotEmpty()
  @IsAlpha()
  arrivalAirport: string;

  @IsNotEmpty()
  @IsDate()
  startDate: Date;

  @IsNotEmpty()
  @IsDate()
  endDate: Date;
}
