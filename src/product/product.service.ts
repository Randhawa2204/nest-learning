import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductService {
  private product = [
    {
      id: 101,
      name: 'MacBook',
      price: 150000,
    },
    {
      id: 102,
      name: 'Iphone',
      price: 90000,
    },
  ];

  findById(id: number) {
    const product = this.product.find((p) => p.id === id);

    if (!product) {
      throw new NotFoundException(`Product ${id} not found`);
    }

    return product;
  }
}
