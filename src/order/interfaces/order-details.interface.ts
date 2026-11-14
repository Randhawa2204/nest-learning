import { Product } from '../../product/interfaces/product.inerface.js';
import { User } from '../../user/interfaces/user.interface.js';

export interface OrderDetails {
  orderId: number;
  user: User;
  product: Product;
}
