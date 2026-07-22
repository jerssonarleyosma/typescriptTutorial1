///aca va todo lo que se refiere a modelado de los datos y definicion de tipos va aca
export type Sizes = 'S' | 'M' | 'L' | 'XL';
export type Product = {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
};
