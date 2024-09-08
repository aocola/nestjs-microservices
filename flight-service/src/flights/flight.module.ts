import { Module } from '@nestjs/common';
import { CreateFlightController } from './infrastructure/controller/create-flight.controller';
import { GetFlightByIdController } from './infrastructure/controller/get-flight.controller';
import { CreateFlightService } from './application/flight-case/create-flight.service';
import { GetFlightService } from './application/flight-case/get-flight.service';
import { InMemoryFlightRepository } from './infrastructure/repository/in-memory-flight.repository';
import { FlightRepository } from './domain/repository/flight.repository';
import { RedisModule } from 'src/config/redis.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Flight, FlightSchema } from './infrastructure/repository/mongo-db/schema/flight.schema';
import { GenerateFlightService } from './application/flight-case/generate-flights.service';
import { GetFlightByDateController } from './infrastructure/controller/get-flightsByDate.controller';
import { GetFlightByDateService } from './application/flight-case/get-flightByDate.service';
import { AddFlightPassengersController } from './infrastructure/controller/add-flight-passenger.controller';
import { AddFlightPassengersService } from './application/flight-case/add-flight-passengers.service';
import { MongoFlightRepository } from './infrastructure/repository/mongo-db/mongo-flight.repository';
import { GenerateFlightController } from './infrastructure/controller/generate-flight.controller';
import { CountFlightService } from './application/flight-case/count-flights.service';


@Module({
    imports:[
        RedisModule,
        MongooseModule.forFeature([{ name: Flight.name, schema: FlightSchema }]),
    ],
    controllers: [
        CreateFlightController,
        GetFlightByIdController,
        GetFlightByDateController,
        GenerateFlightController,
        AddFlightPassengersController
    ],
    providers: [
        CreateFlightService,
        GetFlightService,
        GetFlightByDateService,
        AddFlightPassengersService,
        CountFlightService,
        GenerateFlightService,
        MongoFlightRepository,
        GenerateFlightService,
        {
            provide: FlightRepository,
            useExisting: MongoFlightRepository,
          },
    ],
  })
  export class FlightsModule {}