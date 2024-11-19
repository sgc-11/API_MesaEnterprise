import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateAdminDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  password: string;
}
export class UpdateAdminDto extends PartialType(CreateAdminDto) {}