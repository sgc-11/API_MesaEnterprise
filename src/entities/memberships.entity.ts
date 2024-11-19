import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('memberships')
export class Membership {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string; // e.g., 'Gold', 'Platinum'

  @Column('text')
  benefits: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column({ default: true })
  isActive: boolean;
}
