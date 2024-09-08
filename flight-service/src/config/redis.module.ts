import { Global, Module } from "@nestjs/common";
import { ClientProxyFactory, Transport } from "@nestjs/microservices";
import { optionsDetails } from "./redis.config";


@Global()
@Module({
  providers: [
    {
      provide: 'REDIS_CLIENT',
      useFactory: () => {
        return ClientProxyFactory.create({
          transport: Transport.REDIS,
          options: optionsDetails
        });
      },
    },
  ],
  exports: ['REDIS_CLIENT'],
})

export class RedisModule {}