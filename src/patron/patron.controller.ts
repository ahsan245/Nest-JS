import { Controller, Post, Body, Get } from '@nestjs/common';
import { PatronService } from './patron.service';

@Controller('patron')
export class PatronController {
  constructor(private readonly patronService: PatronService) {}

  @Get()
  async getAllPatrons() {
    const patrons = await this.patronService.getAllPatrons();
    return patrons;
  }

  @Post()
  async createPatron(@Body() patronData) {
    const patron = await this.patronService.createPatron(patronData);
    return patron;
  }
}
