import { User, UserAttributes } from "../entities/user.entity";

export abstract class UserRepository {
    abstract create(user: UserAttributes): Promise<User>;
    abstract getById(id: string): Promise<User | null>;
}