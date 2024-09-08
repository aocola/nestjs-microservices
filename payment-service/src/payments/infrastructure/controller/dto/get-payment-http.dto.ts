import { IsNotEmpty, IsUUID } from 'class-validator';

export class GetPaymentByIdHttpDto {
  @IsNotEmpty()
  @IsUUID()
  id: string;
}
