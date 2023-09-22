import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Library } from './library.model';
import { Book } from '../book/book.model';
import { Patron } from '../patron/patron.model';
import { Loan } from '../loan/loan.model';

@Injectable()
export class LibraryService {
  constructor(
    @InjectRepository(Library)
    private readonly libraryRepository: Repository<Library>,
  ) {}

  async getAllLibraries() {
    const data = await this.libraryRepository.createQueryBuilder("library")
    .leftJoinAndSelect('library.books','books')
    .leftJoinAndSelect('library.loans','loans')
    .leftJoinAndSelect('library.patrons','patrons')
    .getMany();
    return data;
  }

  async createLibrary(libraryData) {
    const library = this.libraryRepository.create(libraryData);
    return await this.libraryRepository.save(library);
  }
}
