import { Injectable } from '@nestjs/common';
import { DynamoDBDocumentClient, PutCommand, GetCommand, ScanCommand, UpdateCommand, DeleteCommand } from '@aws-sdk/lib-dynamodb';
import { Product } from '../../domain/product.entity';

@Injectable()
export class DynamoDBRepository {
  constructor(
    private readonly dynamoDBClient: DynamoDBDocumentClient,
    private readonly tableName: string,
  ) {}

  async create(product: Product): Promise<Product> {
    // TODO(reto): Implementar la lógica para crear un producto en DynamoDB
    throw new Error('Method not implemented');
  }

  async findAll(): Promise<Product[]> {
    // TODO(reto): Implementar la lógica para obtener todos los productos de DynamoDB
    throw new Error('Method not implemented');
  }

  async findById(id: string): Promise<Product | null> {
    // TODO(reto): Implementar la lógica para obtener un producto por ID de DynamoDB
    throw new Error('Method not implemented');
  }

  async update(id: string, product: Partial<Product>): Promise<Product> {
    // TODO(reto): Implementar la lógica para actualizar un producto en DynamoDB
    throw new Error('Method not implemented');
  }

  async delete(id: string): Promise<void> {
    // TODO(reto): Implementar la lógica para eliminar un producto de DynamoDB
    throw new Error('Method not implemented');
  }
}