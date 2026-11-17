export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
}

export interface CreateProductDto {
  name: string;
  price: number;
  category: string;
}

export interface UpdateProductDto {
  name?: string;
  price?: number;
  category?: string;
}