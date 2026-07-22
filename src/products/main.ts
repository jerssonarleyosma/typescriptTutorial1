import { addProduct, calcStock, products } from "./product.service.js";

addProduct({
  title: 'Producto 1',
  createdAt: new Date(1993, 1, 1),
  stock: 12,
  size: 'M'
});
addProduct({
  title: 'Producto 2',
  createdAt: new Date(1993, 1, 1),
  stock: 12,
});
addProduct({
  title: 'Producto 3',
  createdAt: new Date(1993, 1, 1),
  stock: 12,
  size: 'M'
});
console.log(products);
console.log(calcStock());
