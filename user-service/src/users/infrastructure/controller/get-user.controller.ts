import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { GetUserService } from 'src/users/applicatiton/use-case/get-user.service';
import { GetUserByIdHttpDto } from './dto/get-user-http.dto';

@Controller('users')
export class GetUserByIdController {
    constructor(private service: GetUserService){}

    @Get(':id')
    async run(@Param() dto: GetUserByIdHttpDto): Promise<object> {
        try {
            return await this.service.execute(dto.id);
        } catch (error) {
            throw new NotFoundException(error.message);
        }
    }
}