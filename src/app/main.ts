import { addProduct } from './products/product.service';

addProduct({
  id: 1,
  createdAt: new Date(),
  updateAt: new Date(),
  title: 'p1',
  stock: 3,
  category: {
    id: 1,
    name: 'category1',
    createdAt: new Date(),
    updateAt: new Date(),
  },
});
