// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from '../../domain/product.entity';
import { ProductDocument } from './schemas/product.schema';

@Injectable()
export class MongoDBRepository {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
  ) {}

  async create(product: Product): Promise<Product> {
    throw new Error('TODO(reto): create');
  }

  async findAll(): Promise<Product[]> {
    throw new Error('TODO(reto): findAll');
  }

  async findById(id: string): Promise<Product | null> {
    throw new Error('TODO(reto): findById');
  }

  async update(id: string, product: Partial<Product>): Promise<Product> {
    throw new Error('TODO(reto): update');
  }

  async delete(id: string): Promise<void> {
    throw new Error('TODO(reto): delete');
  }
}