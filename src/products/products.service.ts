import { Injectable } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dto';
import { Product } from 'src/entities/products.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Product)
    private readonly makeupProductRepository: Repository<Product>,
  ) {}

  async create(createMakeupProductDTO: CreateProductDto): Promise<Product> {
    const product = this.makeupProductRepository.create(createMakeupProductDTO);
    return this.makeupProductRepository.save(product);
  }

  async findAll(): Promise<Product[]> {
    return this.makeupProductRepository.find();
  }

  async findOne(id: string): Promise<Product> {
    const product = await this.makeupProductRepository.findOne({ where: { id } });
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found.`);
    }
    return product;
  }

  async findByCategory(category: string): Promise<Product[]> {
    return this.makeupProductRepository.find({ where: { category } });
  }

  async update(id: string, updateProductDTO: UpdateProductDto): Promise<Product> {
    const product = await this.findOne(id);
    Object.assign(product, updateProductDTO);
    return this.makeupProductRepository.save(product);
  }

  async delete(id: string): Promise<void> {
    const product = await this.findOne(id);
    await this.makeupProductRepository.remove(product);
  }
}
