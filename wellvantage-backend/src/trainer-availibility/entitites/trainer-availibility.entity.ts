import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BOOKINGSTATUS } from '../enums/trainer-availibilty.enums';

@Entity()
export class TrainerAvailibilty {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  trainerId?: string;

  @Column({ type: 'date' })
  date: Date;

  @Column({ type: 'time' })
  startTime: string;

  @Column({ type: 'time' })
  endTime: string;

  @Column({
    type: 'enum',
    enum: BOOKINGSTATUS,
    default: BOOKINGSTATUS.OPEN,
  })
  status: BOOKINGSTATUS;
}
