import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsNumber, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMediaDto {
  @IsNotEmpty()
  @IsUrl()
  @ApiProperty()
  url: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  description: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  price?: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  modelId?: string; // References the Model entity
}
export class UpdateMediaDto extends PartialType(CreateMediaDto) {}