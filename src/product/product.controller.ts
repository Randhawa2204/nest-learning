import { Controller, ParseIntPipe, Get, Param} from '@nestjs/common';
import { ProductService } from './product.service.js';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService){}

    @Get(':id')
    findById(@Param('id', ParseIntPipe)id: number){
        return this.productService.findById(id);
    }

}
