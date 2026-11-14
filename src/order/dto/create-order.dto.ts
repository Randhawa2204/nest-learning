import {
  IsNotEmpty,
  IsNumber,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @IsNotEmpty()
  @IsNumber()
  productId: number;
}
