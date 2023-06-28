import { User } from '../../01-enum';
import { Product } from '../products/product.model';

interface Order {
  id: string | number;
  createAt: Date;
  products: Product[];
  user: User;
}
