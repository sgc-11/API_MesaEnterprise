import { Module } from '@nestjs/common';
import { MediaService } from './media.service';
import { MediaController } from './media.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Media } from 'src/entities/media.entity';
import { Model } from 'src/entities/models.entity';
import { MesaEvent } from 'src/entities/events.entity';
import { Product } from 'src/entities/products.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Media, Model, MesaEvent, Product])
  ],
  controllers: [MediaController],
  providers: [MediaService],
})
export class MediaModule {}
