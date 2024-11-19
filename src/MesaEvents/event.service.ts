import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { MesaEvent } from 'src/entities/events.entity';
import { CreateMesaEventDto, UpdateMesaEventDto } from 'src/dtos/events.dto';
import { Model } from 'src/entities/models.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(MesaEvent)
    private readonly mesaEventRepository: Repository<MesaEvent>,
    @InjectRepository(Model)
    private readonly modelRepository: Repository<Model>, // For participants relation
  ) {}

  async create(createMesaEventDto: CreateMesaEventDto): Promise<MesaEvent> {
    const { participants, date, ...rest } = createMesaEventDto;

    // Convert participant IDs to Model entities using In operator
    const participantEntities = participants
      ? await this.modelRepository.findBy({ id: In(participants) })
      : [];

    // Create and save the event
    const event = this.mesaEventRepository.create({
      ...rest,
      date: new Date(date), // Convert date string to Date object
      participants: participantEntities,
    });

    return this.mesaEventRepository.save(event);
  }

  async findAll(): Promise<MesaEvent[]> {
    return this.mesaEventRepository.find({
      relations: ['participants'], // Include participants in the response
    });
  }

  async findOne(id: string): Promise<MesaEvent> {
    const event = await this.mesaEventRepository.findOne({
      where: { id },
      relations: ['participants'], // Include participants
    });
    if (!event) {
      throw new NotFoundException(`Event with ID ${id} not found.`);
    }
    return event;
  }

  async update(id: string, updateMesaEventDto: UpdateMesaEventDto): Promise<MesaEvent> {
    const { participants, date, ...rest } = updateMesaEventDto;

    const event = await this.findOne(id);

    if (participants) {
      // Update participants using In operator
      event.participants = await this.modelRepository.findBy({ id: In(participants) });
    }

    if (date) {
      event.date = new Date(date);
    }

    Object.assign(event, rest);

    return this.mesaEventRepository.save(event);
  }

  async delete(id: string): Promise<void> {
    const event = await this.findOne(id);
    await this.mesaEventRepository.remove(event);
  }
}
