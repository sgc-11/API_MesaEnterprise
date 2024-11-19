// auth.service.ts
import { Injectable } from '@nestjs/common';
import { AdminService } from '../admin/admin.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private adminService: AdminService,
    private jwtService: JwtService,
  ) {}

  async validateAdmin(username: string, password: string): Promise<any> {
    const admin = await this.adminService.findByUsername(username);
    if (admin && (await bcrypt.compare(password, admin.password))) {
      const { password, ...result } = admin;
      return result;
    }
    return null;
  }

  async login(admin: any) {
    const payload = { username: admin.username, sub: admin.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
