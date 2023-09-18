// src/entities/library.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Book } from '../book/book.model';
import { Patron } from '../patron/patron.model';
import { Loan } from '../loan/loan.model';

@Entity()
export class Library {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  location: string;

  @OneToMany(() => Book, (book) => book.library)
  books: Book[];

  @OneToMany(() => Patron, (patron) => patron.library)
  patrons: Patron[];

  @OneToMany(() => Loan, (loan) => loan.library)
  loans: Loan[];
}
