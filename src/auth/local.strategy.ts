// src/auth/local.strategy.ts
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super(); // By default, Passport expects 'username' and 'password' fields
  }

  async validate(username: string, password: string): Promise<any> {
    const admin = await this.authService.validateAdmin(username, password);
    if (!admin) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return admin;
  }
}
