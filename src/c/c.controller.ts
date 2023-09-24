// book.controller.ts
import { Controller, Post, Body, Get } from '@nestjs/common';
import { CService } from './c.service'; // Import your service
import { ApiTags } from '@nestjs/swagger'; // Import ApiTags decorator

@ApiTags('C') // Add this decorator to specify the Swagger tag

@Controller('C')
export class CController {
  constructor(private readonly cService: CService) {}

  // ...

  @Get()
  async getAllAs() {
    const cs = await this.cService.getAllCs();
    return cs;
  }

  @Post()
  async createA(@Body() cData) {
    const a = await this.cService.createC(cData);
    return a;
  }
}
