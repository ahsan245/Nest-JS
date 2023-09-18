// book.controller.ts
import { Controller, Post, Body, Get } from '@nestjs/common';
import { BookService } from './book.service'; // Import your service

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  // ...

  @Get()
  async getAllBooks() {
    const books = await this.bookService.getAllBooks();
    return books;
  }

  @Post()
  async createBook(@Body() bookData) {
    const book = await this.bookService.createBook(bookData);
    return book;
  }
}
