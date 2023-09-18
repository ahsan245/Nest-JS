import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.model';

// book.service.ts
@Injectable()
export class BookService {
    constructor(
        @InjectRepository(Book)
        private readonly bookRepository: Repository<Book>,
      ) {}
    
    

  async getAllBooks() {
    return await this.bookRepository.find();
  }

  async createBook(bookData) {
    const book = this.bookRepository.create(bookData);
    return await this.bookRepository.save(book);
  }
}
