import { IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @IsOptional()
  readonly name?: string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  readonly price?: number;

  @IsString()
  @IsOptional()
  readonly category?: string;
}