import { addProduct } from './products/product.service';

addProduct({
  id: 1,
  title: 'p1',
  createAt: new Date(),
  stock: 3,
  category: {
    id: 1,
    name: 'category1',
  },
});
