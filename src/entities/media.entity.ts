import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Model } from './models.entity';

@Entity('media')
export class Media {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  url: string;

  @Column()
  description: string;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  price: number; // For photos available for sale

  @ManyToOne(() => Model, (model) => model.photos, { nullable: true })
  model: Model;
}
