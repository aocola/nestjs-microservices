import { CustomInjectable } from "src/common/dependecy-injection/injectable";
import { User } from "src/users/domain/entities/user.entity";
import { UserRepository } from "src/users/domain/repository/user.repository";
import { CreateUserDto } from "../dto/create-user.dto";

@CustomInjectable()
export class CreateUserService {
    constructor(private readonly userRepository: UserRepository){}

    async execute(dto: CreateUserDto): Promise<object>{
        const partialUser = User.create(dto);
        const user = await this.userRepository.create(partialUser);
        return user.toValue();
    }
}