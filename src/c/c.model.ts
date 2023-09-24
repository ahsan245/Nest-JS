// src/entities/loan.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { B } from '../b/b.model';
import { A } from '../a/a.model';

@Entity()
export class C {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dueDate: Date;

  @ManyToOne(() => B, (b) => b.cs)
  b: B;

}