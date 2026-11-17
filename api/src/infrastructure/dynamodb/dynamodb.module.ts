import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand, GetCommand, ScanCommand, UpdateCommand, DeleteCommand } from '@aws-sdk/lib-dynamodb';
import { DynamoDBRepository } from './dynamodb.repository';

@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: 'DYNAMODB_CLIENT',
      useFactory: (configService: ConfigService) => {
        throw new Error('TODO(reto): provide');
      },
      inject: [ConfigService],
    },
    {
      provide: 'PRODUCT_TABLE',
      useValue: 'Products',
    },
    {
      provide: DynamoDBRepository,
      useFactory: (dynamoDBClient: DynamoDBDocumentClient, tableName: string) => {
        throw new Error('TODO(reto): provide');
      },
      inject: ['DYNAMODB_CLIENT', 'PRODUCT_TABLE'],
    },
  ],
  exports: [DynamoDBRepository],
})
export class DynamoDBModule {}