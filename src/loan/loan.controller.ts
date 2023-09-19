// book.controller.ts
import { Controller, Post, Body, Get } from '@nestjs/common';
import { LoanService } from './loan.service'; // Import your service

@Controller('loan')
export class LoanController {
  constructor(private readonly loanService: LoanService) {}

  // ...

  @Get()
  async getAllBooks() {
    const books = await this.loanService.getAllLoans();
    return books;
  }

  @Post()
  async createBook(@Body() loanData) {
    const book = await this.loanService.createLoan(loanData);
    return book;
  }
}
