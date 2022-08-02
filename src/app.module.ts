import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from './schemas/movie/movie.module';
import { OrderModule } from './schemas/order/order.module';
import { PaymentModule } from './schemas/payment/payment.module';
import { UserModule } from './schemas/user/user.module';
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL_AUTH),
    MovieModule,
    UserModule,
    OrderModule,
    PaymentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
