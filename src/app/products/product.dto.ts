import { Product } from './product.model';

export interface CreateProductDto
  extends Omit<Product, 'id' | 'createAt' | 'updateAt' | 'category'> {
  categoryID: string;
}

export interface UpdateProductDto extends Partial<CreateProductDto> {}
