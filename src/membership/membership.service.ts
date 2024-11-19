import { Injectable } from '@nestjs/common';
import { CreateMembershipDto, UpdateMembershipDto } from 'src/dtos/memberships.dto';
import { Membership } from 'src/entities/memberships.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class MembershipService {
  constructor(
    @InjectRepository(Membership)
    private readonly membershipRepository: Repository<Membership>,
  ) {}

  async create(createMembershipDTO: CreateMembershipDto): Promise<Membership> {
    const membership = this.membershipRepository.create(createMembershipDTO);
    return this.membershipRepository.save(membership);
  }

  async findAll(): Promise<Membership[]> {
    return this.membershipRepository.find();
  }

  async findOne(id: string): Promise<Membership> {
    const membership = await this.membershipRepository.findOne({ where: { id } });
    if (!membership) {
      throw new NotFoundException(`Membership with ID ${id} not found.`);
    }
    return membership;
  }

  async findActive(): Promise<Membership[]> {
    return this.membershipRepository.find({ where: { isActive: true } });
  }

  async update(id: string, updateMembershipDTO: UpdateMembershipDto): Promise<Membership> {
    const membership = await this.findOne(id);
    Object.assign(membership, updateMembershipDTO);
    return this.membershipRepository.save(membership);
  }

  async delete(id: string): Promise<void> {
    const membership = await this.findOne(id);
    await this.membershipRepository.remove(membership);
  }
}
