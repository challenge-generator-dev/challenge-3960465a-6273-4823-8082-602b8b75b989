import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DynamoDBModule } from './infrastructure/dynamodb/dynamodb.module';
import { MongoDBModule as MongodbModule } from './infrastructure/mongodb/mongodb.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DynamoDBModule,
    MongodbModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}