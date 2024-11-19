import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateMembershipDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  benefits: string;

  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 })
  price: number;

  @IsNotEmpty()
  @IsBoolean()
  isActive: boolean;
}
export class UpdateMembershipDto extends PartialType(CreateMembershipDto) {}