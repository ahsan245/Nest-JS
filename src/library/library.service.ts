import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Library } from './library.model';

@Injectable()
export class LibraryService {
  constructor(
    @InjectRepository(Library)
    private readonly libraryRepository: Repository<Library>,
  ) {}

  async getAllLibraries() {
    return await this.libraryRepository.find();
  }

  async createLibrary(libraryData) {
    const library = this.libraryRepository.create(libraryData);
    return await this.libraryRepository.save(library);
  }
}
