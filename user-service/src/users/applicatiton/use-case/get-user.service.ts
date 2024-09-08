import { CustomInjectable } from "src/common/dependecy-injection/injectable";
import { UserNotFoundException } from "src/users/domain/exceptions/user-not-found";
import { UserRepository } from "src/users/domain/repository/user.repository";

@CustomInjectable()
export class GetUserService {
    constructor(private readonly userRepository: UserRepository){}

    async execute(id: string): Promise<object> {
        const user = await this.userRepository.getById(id);
        if(!user) {
            throw new UserNotFoundException(id);
        }
        return user.toValue();
    }
}