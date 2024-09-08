import { IsNotEmpty, IsUUID } from 'class-validator';

export class GetUserByIdHttpDto {
  @IsNotEmpty()
  @IsUUID()
  id: string;
}
