import {
  addProduct,
  products,
  updateProduct,
} from './products/product.service';
import { faker } from '@faker-js/faker';

for (let index = 0; index < 50; index++) {
  addProduct({
    title: faker.commerce.productName(),
    image: faker.image.url(),
    description: faker.commerce.productDescription(),
    stock: faker.number.int({ min: 10, max: 100 }),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price({ min: 100, max: 200 })),
    categoryID: faker.string.uuid(),
    isNew: faker.datatype.boolean(),
  });
}

console.log(products);

const product1 = products[0];

updateProduct(product1.id, {
  title: 'new title',
});
