import { IsEmail, IsNotEmpty, IsOptional, IsString, IsPhoneNumber } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateModelDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  bio?: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsPhoneNumber()
  phone?: string;
}
export class UpdateModelDto extends PartialType(CreateModelDto) {}
