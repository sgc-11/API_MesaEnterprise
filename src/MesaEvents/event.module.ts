import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MesaEvent } from 'src/entities/events.entity';
import { Model } from 'src/entities/models.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([MesaEvent, Model])
  ],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}
