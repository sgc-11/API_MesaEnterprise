import { Module } from '@nestjs/common';
import { ModelsService } from './models.service';
import { ModelsController } from './models.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Media } from 'src/entities/media.entity';
import { Model } from 'src/entities/models.entity';
import { MesaEvent } from 'src/entities/events.entity';
import { Product } from 'src/entities/products.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Media, Model, MesaEvent, Product])
  ],
  controllers: [ModelsController],
  providers: [ModelsService],
})
export class ModelsModule {}
