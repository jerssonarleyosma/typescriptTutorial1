import type { Product } from './product.model.js';

export const products: Product[] = [];

export const addProduct = (data: Product) => {
    products.push(data);
}

export const calcStock = () => {
    let total = 0;
    products.forEach(product => {
        total += product.stock;
    });
    return total;
}
