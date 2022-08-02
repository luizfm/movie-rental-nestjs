import { Controller, Get, Post } from '@nestjs/common';
import { PaymentsDto } from './dto/payment.dto';
import { PaymentService } from './payment.service';

@Controller('payments')
export class PaymentsController {
  constructor(private paymentService: PaymentService) {}

  @Get()
  async findAllPayments(): Promise<PaymentsDto[]> {
    return this.paymentService.findAll();
  }

  @Post()
  async createPayment(payment: PaymentsDto): Promise<PaymentsDto> {
    return this.paymentService.createPayment(payment);
  }
}
