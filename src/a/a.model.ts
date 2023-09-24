import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { B } from '../b/b.model';
import { C } from '../c/c.model';

@Entity()
export class A {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @ManyToOne(() => B, (b) => b.as)
  b: B;

}
