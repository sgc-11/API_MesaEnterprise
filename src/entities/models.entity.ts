import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { MesaEvent } from './events.entity';
import { Media } from './media.entity';

@Entity('models')
export class Model {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  bio: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  phone: string;

  @OneToMany(() => Media, (media) => media.model)
  photos: Media[];

  @ManyToMany(() => MesaEvent, (MesaEvent) => MesaEvent.participants)
  @JoinTable()
  events: MesaEvent[];
}
