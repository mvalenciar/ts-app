const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number,
) => {
  return {
    id,
    stock: stock ?? 10,
    isNew: isNew ?? true,
  };
};

const p1 = createProduct(1, true, 10);
console.log(p1);

const p2 = createProduct(2, true);
console.log(p2);
