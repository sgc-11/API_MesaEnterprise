// src/admin/admin.controller.ts
import { Controller, Post, Body, UseGuards, Get, Request } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from 'src/dtos/admin.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  // Endpoint to create a new admin (should be protected or removed in production)
  @Post('register')
  async register(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }

  // Protected endpoint to get admin profile
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
