import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsDateString, IsOptional } from 'class-validator';

export class CreateMesaEventDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsDateString()
  date: string;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsOptional()
  participants?: string[]; // Array of Model IDs
}
export class UpdateMesaEventDto extends PartialType(CreateMesaEventDto) {}
