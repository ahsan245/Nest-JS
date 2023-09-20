import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Library } from './library.model';
import { Book } from '../book/book.model';
import { Patron } from '../patron/patron.model';
import { Loan } from '../loan/loan.model';
import { LibraryController } from './library.controller';
import { LibraryService } from './library.service';
import { BookService } from '../book/book.service';
import { PatronService } from '../patron/patron.service';
import { LoanService } from '../loan/loan.service';
import { BookController } from '../book/book.controller';
import { PatronController } from '../patron/patron.controller';
import { LoanController } from '../loan/loan.controller';



@Module({
  imports: [TypeOrmModule.forFeature([Library, Book, Patron, Loan])],
  controllers: [LibraryController,BookController,PatronController,LoanController],
  providers: [LibraryService, BookService,PatronService,LoanService]
})
export class LibraryModule {}
