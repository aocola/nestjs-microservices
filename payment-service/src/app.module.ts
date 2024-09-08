import { Module } from '@nestjs/common';
import { PaymentsModule } from './payments/payments.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [PaymentsModule,
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.tsp3o.mongodb.net/?retryWrites=true&w=majority&appName=sample`,
    )
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
