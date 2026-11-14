import { Injectable, NotFoundException } from '@nestjs/common';
import { Order } from './interfaces/order.interface.js';
import { UserService } from '../user/user.service.js';
import { ProductService } from '../product/product.service.js';
import { OrderDetails } from './interfaces/order-details.interface.js';
import { CreateOrderDto } from './dto/create-order.dto.js';

@Injectable()
export class OrderService {
  constructor(
    private readonly userService: UserService,
    private readonly productService: ProductService,
  ) {}
  private orders: Order[] = [
    {
      id: 5001,
      userId: 1,
      productId: 101,
    },
  ];

  getOrderDetails(id: number): OrderDetails {
    const order = this.orders.find((o) => o.id === id);

    if (!order) {
      throw new NotFoundException(`order ${id} not found`);
    }

    const user = this.userService.findById(order.userId);
    const product = this.productService.findById(order.productId);

    return {
      orderId: order.id,
      user,
      product,
    };
  }

  createOrder(createOrderDto: CreateOrderDto){
    this.orders.push(createOrderDto);
    return createOrderDto;
  }
}
