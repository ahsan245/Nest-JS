// src/entities/patron.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Library } from '../library/library.model';

@Entity()
export class Patron {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Library, (library) => library.patrons)
  library: Library;
}
