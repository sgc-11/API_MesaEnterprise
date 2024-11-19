// src/admin/admin.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from '../entities/admin.entity';
import { Repository } from 'typeorm';
import { CreateAdminDto } from 'src/dtos/admin.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>,
  ) {}

  async create(createAdminDto: CreateAdminDto): Promise<Admin> {
    const { username, password } = createAdminDto;
    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = this.adminRepository.create({
      username,
      password: hashedPassword,
    });

    return this.adminRepository.save(admin);
  }

  async findByUsername(username: string): Promise<Admin | undefined> {
    return this.adminRepository.findOne({ where: { username } });
  }

  async findById(id: string): Promise<Admin | undefined> {
    return this.adminRepository.findOne({ where: { id } });
  }
}
