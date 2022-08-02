import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { PaymentStatus, PaymentType } from './dto/payment.dto';

export type PaymentDocument = Payment & Document;

@Schema()
export class Payment {
  @Prop()
  status: PaymentStatus;

  @Prop()
  type: PaymentType;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
