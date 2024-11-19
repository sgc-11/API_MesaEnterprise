import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MembershipService } from './membership.service';
import { CreateMembershipDto, UpdateMembershipDto } from 'src/dtos/memberships.dto';

@Controller('membership')
export class MembershipController {
  constructor(private readonly membershipService: MembershipService) {}

  @Post()
  create(@Body() createMembershipDto: CreateMembershipDto) {
    return this.membershipService.create(createMembershipDto);
  }

  @Get()
  findAll() {
    return this.membershipService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.membershipService.findOne(id);
  }

  @Get()
  findActive() {
    return this.membershipService.findActive();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMembershipDto: UpdateMembershipDto) {
    return this.membershipService.update(id, updateMembershipDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.membershipService.delete(id);
  }
}
