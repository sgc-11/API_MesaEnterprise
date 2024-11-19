import { Injectable } from '@nestjs/common';
import { CreateModelDto, UpdateModelDto } from 'src/dtos/models.dto';
import { Model } from 'src/entities/models.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class ModelsService {
  constructor(
    @InjectRepository(Model)
    private readonly modelRepository: Repository<Model>,
  ) {}

  async create(createModelDTO: CreateModelDto): Promise<Model> {
    const model = this.modelRepository.create(createModelDTO);
    return this.modelRepository.save(model);
  }

  async findAll(): Promise<Model[]> {
    return this.modelRepository.find();
  }

  async findOne(id: number): Promise<Model> {
    const model = await this.modelRepository.findOne({ where: { id } });
    if (!model) {
      throw new NotFoundException(`Model with ID ${id} not found.`);
    }
    return model;
  }

  async update(id: number, updateModelDTO: UpdateModelDto): Promise<Model> {
    const model = await this.findOne(id);
    Object.assign(model, updateModelDTO);
    return this.modelRepository.save(model);
  }

  async delete(id: number): Promise<void> {
    const model = await this.findOne(id);
    await this.modelRepository.remove(model);
  }
}
