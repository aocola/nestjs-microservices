import { Module } from '@nestjs/common';
import { CreateTicketController } from './infrastructure/controller/create-ticket.controller';
import { GetTicketByIdController } from './infrastructure/controller/get-ticket.controller';
import { CreateTicketService } from './applicatiton/use-case/create-ticket.service';
import { GetTicketService } from './applicatiton/use-case/get-ticket.service';

import { TicketRepository } from './domain/repository/ticket.repository';
import { RedisModule } from 'src/config/redis.module';
import { SetStatusTicketService } from './applicatiton/use-case/set-status-ticket.service';
import { Ticket, TicketSchema } from './infrastructure/repository/mongo-db/schema/ticket.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoTicketRepository } from './infrastructure/repository/mongo-db/mongo.ticket.repository';


@Module({
    imports:[
        RedisModule,
        MongooseModule.forFeature([{ name: Ticket.name, schema: TicketSchema }]),
    ],
    controllers: [
        CreateTicketController,
        GetTicketByIdController
    ],
    providers: [
        CreateTicketService,
        GetTicketService,
        SetStatusTicketService,
        MongoTicketRepository,
        {
            provide: TicketRepository,
            useExisting: MongoTicketRepository,
          },
    ],
  })
  export class TicketsModule {}