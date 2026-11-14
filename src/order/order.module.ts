import { Module } from '@nestjs/common';
import { OrderController } from './order.controller.js';
import { OrderService } from './order.service.js';
import { UserModule } from '../user/user.module.js';
import { ProductModule } from '../product/product.module.js';

@Module({
  imports: [UserModule, ProductModule],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
