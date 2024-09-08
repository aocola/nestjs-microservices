import { Module } from '@nestjs/common';
import { FlightsModule } from './flights/flight.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [FlightsModule,
    MongooseModule.forRoot(
    `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.tsp3o.mongodb.net/?retryWrites=true&w=majority&appName=sample`,
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
