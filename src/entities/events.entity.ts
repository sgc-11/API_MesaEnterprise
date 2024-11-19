import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Model } from './models.entity';

@Entity('events')
export class MesaEvent {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column('date')
  date: Date;

  @Column()
  location: string;

  @ManyToMany(() => Model, (model) => model.events)
  @JoinTable()
  participants: Model[];
}
