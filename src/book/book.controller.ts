// book.controller.ts
import { Controller, Post, Body, Get } from '@nestjs/common';
import { BookService } from './book.service'; // Import your service
import { ApiTags, ApiResponse, ApiBody } from '@nestjs/swagger';
import { CreateBookDto } from './create-book.dto'; // Import the DTO



@ApiTags('book') // Add this decorator to specify the Swagger tag
@ApiResponse({ status: 201, description: 'Create a book' })

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  // ...

  @Get()
  @ApiResponse({ status: 201, description: 'Gett all books' })

  async getAllBooks() {
    const books = await this.bookService.getAllBooks();
    return books;
  }

  @Post()
  @ApiBody({ type: CreateBookDto }) // Use the CreateBookDto here

  async createBook(@Body() bookData) {
    const book = await this.bookService.createBook(bookData);
    return book;
  }
}
