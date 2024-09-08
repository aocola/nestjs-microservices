import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { optionsDetails } from './config/redis.config';
import { getPort } from './common/utils/common-functions';

const logger = new Logger('ServerMain-FlightService');


async function bootstrap() {
  //Listen Requests
  const app = await NestFactory.create(AppModule);
  const portHTTP = getPort(process.env.HTTP_PORT, "HTTP");
  await app.listen(portHTTP, () => {
    console.log(`FlightService HTTP server is listening on port ${portHTTP}`);
  });
  //
  const microserviceOptions : MicroserviceOptions = {
    transport: Transport.REDIS,
    options: optionsDetails
  };
  const microservice = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    microserviceOptions
  );
  await microservice.listen();
  logger.log("FlightService up and listening");
}

dotenv.config();
bootstrap();
