import { IsNotEmpty, IsUUID } from 'class-validator';

export class GetFlightByIdHttpDto {
  @IsNotEmpty()
  @IsUUID()
  id: string;
}
