import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsOptional, IsUrl } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 })
  price: number;

  @IsNotEmpty()
  @IsString()
  category: string;

  @IsOptional()
  @IsUrl()
  imageUrl?: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
