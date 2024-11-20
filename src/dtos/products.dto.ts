import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsOptional, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 })
  price: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  category: string;

  @ApiProperty()
  @IsOptional()
  @IsUrl()
  imageUrl?: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}
