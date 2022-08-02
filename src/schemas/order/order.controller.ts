import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrderDto } from './dto/order.dto';
import { OrderService } from './order.service';

@Controller('orders')
export class OrdersController {
  constructor(private orderService: OrderService) {}

  @Get()
  async findAllOrders(): Promise<OrderDto[]> {
    return this.orderService.findAll();
  }

  @Post()
  async createOrder(@Body() order: OrderDto): Promise<OrderDto> {
    return this.orderService.createOrder(order);
  }
}
