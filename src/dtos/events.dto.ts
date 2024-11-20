import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsDateString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMesaEventDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  description: string;

  @IsNotEmpty()
  @IsDateString()
  @ApiProperty()
  date: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  location: string;

  @IsOptional()
  participants?: string[]; // Array of Model IDs
}
export class UpdateMesaEventDto extends PartialType(CreateMesaEventDto) {}
