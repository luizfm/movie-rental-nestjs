import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OrderDto } from './dto/order.dto';
import { Order, OrderDocument } from './order.schema';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
  ) {}

  async findAll(): Promise<OrderDto[]> {
    return this.orderModel.find().exec();
  }

  async createOrder(order: OrderDto): Promise<OrderDto> {
    const newOrder = new this.orderModel(order);
    return newOrder.save();
  }
}
