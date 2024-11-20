import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMembershipDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  benefits: string;

  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 })
  @ApiProperty()
  price: number;

  @IsNotEmpty()
  @IsBoolean()
  @ApiProperty()
  isActive: boolean;
}
export class UpdateMembershipDto extends PartialType(CreateMembershipDto) {}