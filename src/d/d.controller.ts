import { Controller, Post, Body, Get } from '@nestjs/common';
import {DService } from './d.service';

@Controller('d')
export class DController {
  constructor(private readonly dService: DService) {}

  @Get()
  async getAllDs() {
    const ds = await this.dService.getAllDs();
    return ds;
  }

  @Post()
  async createD(@Body() dData) {
    const d = await this.dService.createD(dData);
    return d;
  }
}
