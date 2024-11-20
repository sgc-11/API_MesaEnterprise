import { IsEmail, IsNotEmpty, IsOptional, IsString, IsPhoneNumber } from 'class-validator';
import { PartialType } from '@nestjs/swagger';
import { ApiProperty } from '@nestjs/swagger';

export class CreateModelDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  bio?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsOptional()
  @IsPhoneNumber()
  phone?: string;
}
export class UpdateModelDto extends PartialType(CreateModelDto) {}
