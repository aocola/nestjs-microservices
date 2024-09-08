import { CustomInjectable } from 'src/common/dependecy-injection/injectable';
import { User, UserAttributes } from 'src/users/domain/entities/user.entity';
import { UserRepository } from 'src/users/domain/repository/user.repository';
import { v4 as uuidv4 } from 'uuid';


@CustomInjectable()
export class InMemoryUserRepository implements UserRepository {
    private userInMemory: UserAttributes[] = [];

    async create(user: UserAttributes): Promise<User> {
        const id = uuidv4();
        const model = new User({id, ...user});
        this.userInMemory.push(model.toValue());
        return model;
    }

    async getById(id: string): Promise<User | null> {
        const user = this.userInMemory.find((user)=>user.id===id);
        return user? new User(user): null;
    }
}