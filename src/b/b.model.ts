// src/entities/library.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { A } from '../a/a.model';
import { D } from '../d/d.model';
import { C } from '../c/c.model';

@Entity()
export class B {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  location: string;

  @OneToMany(() => A, (a) => a.b)
  as: A[];

  @OneToMany(() => D, (d) => d.b)
  ds: D[];

  @OneToMany(() => C, (c) => c.b)
  cs: C[];
}
