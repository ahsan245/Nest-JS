// src/entities/patron.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { B } from '../b/b.model';
// import {D} from '../d/d.module'

@Entity()
export class D {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => B, (b) => b.ds)
  b: B;
}
