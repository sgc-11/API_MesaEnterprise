import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsNumber, IsUrl } from 'class-validator';

export class CreateMediaDto {
  @IsNotEmpty()
  @IsUrl()
  url: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  price?: number;

  @IsOptional()
  @IsString()
  modelId?: string; // References the Model entity
}
export class UpdateMediaDto extends PartialType(CreateMediaDto) {}