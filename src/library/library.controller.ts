import { Controller, Post, Body, Get } from '@nestjs/common';
import { LibraryService } from './library.service'; // Import your service

@Controller('library')
export class LibraryController {
  constructor(private readonly libraryService: LibraryService) {}

  @Get()
  async getAllLibraries() {
    const libraries = await this.libraryService.getAllLibraries();
    return libraries;
  }

  @Post()
  async createLibrary(@Body() libraryData) {
    const library = await this.libraryService.createLibrary(libraryData);
    return library;
  }
}
