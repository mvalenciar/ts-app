import { faker } from '@faker-js/faker';

import { CreateProductDto, UpdateProductDto } from './product.dto';
import { Product } from './product.model';

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto): Product => {
  const newProduct = {
    id: faker.string.uuid(),
    createAt: faker.date.recent(),
    updateAt: faker.date.recent(),
    ...data,
    category: {
      id: data.categoryID,
      createAt: faker.date.recent(),
      updateAt: faker.date.recent(),
      name: faker.commerce.department(),
    },
  };

  products.push(newProduct);
  return newProduct;
};

export const updateProduct = (
  id: string | number,
  changes: UpdateProductDto,
): Product => {
  const index = products.findIndex((item) => item.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes,
  };
  return products[index];
};
