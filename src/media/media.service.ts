import { Injectable } from '@nestjs/common';
import { CreateMediaDto, UpdateMediaDto } from 'src/dtos/media.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Media } from 'src/entities/media.entity';
import { NotFoundException } from '@nestjs/common';


@Injectable()
export class MediaService {
  constructor(
    @InjectRepository(Media)
    private readonly mediaRepository: Repository<Media>,
  ) {}

  async create(createMediaDTO: CreateMediaDto): Promise<Media> {
    const media = this.mediaRepository.create(createMediaDTO);
    return this.mediaRepository.save(media);
  }

  async findAll(): Promise<Media[]> {
    return this.mediaRepository.find();
  }

  async findOne(id: string): Promise<Media> {
    const media = await this.mediaRepository.findOne({ where: { id } });
    if (!media) {
      throw new NotFoundException(`Media with ID ${id} not found.`);
    }
    return media;
  }

  async findByModel(modelId: number): Promise<Media[]> {
    return this.mediaRepository.find({ where: { model: { id: modelId } } });
  }

  async update(id: string, updateMediaDTO: UpdateMediaDto): Promise<Media> {
    const media = await this.findOne(id);
    Object.assign(media, updateMediaDTO);
    return this.mediaRepository.save(media);
  }

  async delete(id: string): Promise<void> {
    const media = await this.findOne(id);
    await this.mediaRepository.remove(media);
  }
}
