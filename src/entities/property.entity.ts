import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  year: number;

  @Column({ default: 0 })
  price: number;
}
