import { Module } from '@nestjs/common';
import { CreatePaymentController } from './infrastructure/controller/create-payment.controller';
import { GetPaymentByIdController } from './infrastructure/controller/get-payment.controller';
import { CreatePaymentService } from './applicatiton/use-case/create-payment.service';
import { GetPaymentService } from './applicatiton/use-case/get-payment.service';
import { PaymentRepository } from './domain/repository/payment.repository';
import { RedisModule } from 'src/config/redis.module';
import { Payment, PaymentSchema } from './infrastructure/repository/mongo-db/schema/payment.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoPaymentRepository } from './infrastructure/repository/mongo-db/mongo.payment.repository';
import { Card, CardSchema } from './infrastructure/repository/mongo-db/schema/cards.schema';


@Module({
    imports:[
        RedisModule,
        MongooseModule.forFeature([
            { name: Payment.name, schema: PaymentSchema },
            { name: Card.name, schema: CardSchema }
        ]),
    ],
    controllers: [
        CreatePaymentController,
        GetPaymentByIdController
    ],
    providers: [
        CreatePaymentService,
        GetPaymentService,
        MongoPaymentRepository,
        {
            provide: PaymentRepository,
            useExisting: MongoPaymentRepository,
          },
    ],
  })
  export class PaymentsModule {}