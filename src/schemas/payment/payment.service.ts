import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PaymentsDto } from './dto/payment.dto';
import { Payment } from './payment.schema';

@Injectable()
export class PaymentService {
  constructor(
    @InjectModel(Payment.name) private paymentModel: Model<Payment>,
  ) {}

  async findAll(): Promise<PaymentsDto[]> {
    return this.paymentModel.find().exec();
  }

  async createPayment(payment: PaymentsDto): Promise<PaymentsDto> {
    const newPayment = new this.paymentModel(payment);
    return newPayment.save();
  }
}
