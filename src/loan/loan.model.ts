// src/entities/loan.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Library } from '../library/library.model';
import { Book } from '../book/book.model';

@Entity()
export class Loan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dueDate: Date;

  @ManyToOne(() => Library, (library) => library.loans)
  library: Library;

  @ManyToOne(() => Book, (book) => book.loans)
  book: Book;
}
