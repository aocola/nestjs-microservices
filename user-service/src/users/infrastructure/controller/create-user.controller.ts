import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserService } from 'src/users/applicatiton/use-case/create-user.service';
import { CreateUserHttpDto } from './dto/create-user-http.dto';


@Controller('users')
export class CreateUserController {
    constructor(private createService: CreateUserService){}

    @Post()
    async run(@Body() dto: CreateUserHttpDto): Promise<object> {
        return await this.createService.execute(dto);
    }
}