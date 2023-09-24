import { Controller, Post, Body, Get } from '@nestjs/common';
import { AService } from './a.service'; // Import your service
import { ApiTags, ApiResponse, ApiBody } from '@nestjs/swagger';
import { ADto } from './create-a.dto'; // Import the DTO



@ApiTags('a') // Add this decorator to specify the Swagger tag
@ApiResponse({ status: 201, description: 'Create a ' })

@Controller('a')
export class AController {
  constructor(private readonly aService: AService) {}

  // ...

  @Get()
  @ApiResponse({ status: 201, description: 'Gett all as' })

  async getAllAs() {
    const as = await this.aService.getAllAs();
    return as;
  }

  @Post()
  @ApiBody({ type: ADto })  
  async createA(@Body() aData) {
    const a = await this.aService.createA(aData);
    return a;
  }
}
