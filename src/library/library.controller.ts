// LibraryController.ts
import { Controller, Post, Body ,Get} from '@nestjs/common';
import { LibraryService } from './library.service';
import { BookService } from '../book/book.service';
import { PatronService } from '../patron/patron.service';
import { LoanService } from '../loan/loan.service';
import { LibraryBookPatronLoanDTO } from './LibraryBookPatronLoanDTO';

@Controller('library')
export class LibraryController {
  constructor(
    private readonly libraryService: LibraryService,
    private readonly bookService: BookService,
    private readonly patronService: PatronService,
    private readonly loanService: LoanService,

    ) {}

  @Post('create-all')
  async createAllEntities(@Body() data: LibraryBookPatronLoanDTO) {
    const libraryData = data.library;
    const bookData = data.book;
    const patronData = data.patron;
    const loanData = data.loan;

    // Create records in each entity using the respective services
    const library = await this.libraryService.createLibrary(libraryData);
    const id = library['id'];
    console.log(id);
    bookData['library'] = id;
    patronData['library'] = id;
    loanData['library'] = id;
    const book = await this.bookService.createBook(bookData);
    const patron = await this.patronService.createPatron(patronData);
    const loan = await this.loanService.createLoan(loanData);

    // Create records in other entities in a similar way

    // Return the created records if needed
    return {
      library,
      book,
      patron,
      loan
      // Add other created records as needed
    };
  }



  @Get()
  async getAllEntities() {
    const libraries = await this.libraryService.getAllLibraries();
    // const books = await this.bookService.getAllBooks();
    // const patrons = await this.patronService.getAllPatrons();
    // const loans = await this.loanService.getAllLoans();

    // You can customize the response structure as needed
    return {
      libraries,
      // books,
      // patrons,
      // loans,
    };
  }
}
