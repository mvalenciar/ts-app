import { User } from '../../01-enum';
import { BaseModel } from '../base.model';
import { Product } from '../products/product.model';

interface Order extends BaseModel {
  products: Product[];
  user: User;
}
