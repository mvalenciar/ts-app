type Sizes = 'S' | 'M' | 'L' | 'XL';

// type Product = {
//   id: string | number;
//   title: string;
//   createAt: Date;
//   stock: number;
//   size: Sizes;
// };

interface Product {
  id: string | number;
  title: string;
  createAt: Date;
  stock: number;
  size?: Sizes;
}

const products: Product[] = [];

products.push({
  id: 1,
  title: 'p1',
  createAt: new Date(),
  stock: 3,
});

const addProduct = (data: Product) => {
  products.push(data);
};
