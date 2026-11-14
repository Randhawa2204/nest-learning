import { Controller, Param, Get, ParseIntPipe, Post, UseGuards, Body } from '@nestjs/common';
import { OrderService } from './order.service.js';
import { Roles } from '../common/decorators/role.decorator.js';
import { Role } from '../common/enums.js';
import { AuthGuard } from '../common/guards/auth.guard.js';
import { RoleGuard } from '../common/guards/role.guard.js';
import { CreateOrderDto } from './dto/create-order.dto.js';

@Controller('order')
export class OrderController {

    constructor(private readonly orderService: OrderService){}

    @Get(':id')
    finById(@Param('id', ParseIntPipe)id: number){
        // throw new Error();
        return this.orderService.getOrderDetails(id)
    }

    @Post()
    @Roles(Role.ADMIN)
    @UseGuards(AuthGuard, RoleGuard)
    createOrder(@Body() createOrderDto: CreateOrderDto){
        return this.orderService.createOrder(createOrderDto);
    }

}
