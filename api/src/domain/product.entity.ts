import { v4 as uuidv4 } from 'uuid';

export class Product {
  readonly id: string;
  name: string;
  price: number;
  category: string;

  constructor(name: string, price: number, category: string, id?: string) {
    if (!name || name.trim().length === 0) {
      throw new Error('Product name is required');
    }
    if (price <= 0) {
      throw new Error('Product price must be greater than zero');
    }
    if (!category || category.trim().length === 0) {
      throw new Error('Product category is required');
    }

    this.id = id || uuidv4();
    this.name = name;
    this.price = price;
    this.category = category;
  }

  update(name?: string, price?: number, category?: string): void {
    if (name !== undefined) {
      if (!name || name.trim().length === 0) {
        throw new Error('Product name is required');
      }
      this.name = name;
    }
    if (price !== undefined) {
      if (price <= 0) {
        throw new Error('Product price must be greater than zero');
      }
      this.price = price;
    }
    if (category !== undefined) {
      if (!category || category.trim().length === 0) {
        throw new Error('Product category is required');
      }
      this.category = category;
    }
  }
}