import { Module } from '@nestjs/common';
import { CreateUserController } from './infrastructure/controller/create-user.controller';
import { GetUserByIdController } from './infrastructure/controller/get-user.controller';
import { CreateUserService } from './applicatiton/use-case/create-user.service';
import { GetUserService } from './applicatiton/use-case/get-user.service';
import { InMemoryUserRepository } from './infrastructure/repository/in-memory-product.repository';
import { UserRepository } from './domain/repository/user.repository';


@Module({
    controllers: [
        CreateUserController,
        GetUserByIdController
    ],
    providers: [
        CreateUserService,
        GetUserService,
        InMemoryUserRepository,
        {
            provide: UserRepository,
            useExisting: InMemoryUserRepository,
          },
    ],
  })
  export class UsersModule {}