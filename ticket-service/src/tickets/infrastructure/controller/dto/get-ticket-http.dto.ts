import { IsNotEmpty, IsUUID } from 'class-validator';

export class GetTicketByIdHttpDto {
  @IsNotEmpty()
  @IsUUID()
  id: string;
}
