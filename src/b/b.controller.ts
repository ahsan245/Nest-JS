// LibraryController.ts
import { Controller, Post, Body ,Get} from '@nestjs/common';
import { BService } from './b.service';
import { AService } from '../a/a.service';
import { DService } from '../d/d.service';
import { CService } from '../c/c.service';
// import { abcdDTO } from './abcdDTO';
import { abcdDTO, PostRequest  } from './abcdDTO';
import { ApiTags, ApiResponse, ApiBody } from '@nestjs/swagger';

@Controller('B')
export class BController {
  constructor(
    private readonly bService: BService,
    private readonly aService: AService,
    private readonly dService: DService,
    private readonly cService: CService,

    ) {}

  @Post('create-all')

  @ApiBody({ type: PostRequest } ) // Use the CreateBookDto here
@ApiResponse({ status: 201, description: 'Created All' })
  async createAllEntities(@Body() data: abcdDTO) {
    const bData = data.b;
    const aData = data.a;
    const dData = data.d;
    const cData = data.c;

    // Create records in each entity using the respective services
    const b = await this.bService.createB(bData);
    const id = b['id'];
    console.log(id);
    aData['b'] = id;
    dData['b'] = id;
    cData['b'] = id;
    const a = await this.aService.createA(aData);
    const d = await this.dService.createD(dData);
    const c = await this.cService.createC(cData);

    // Create records in other entities in a similar way

    // Return the created records if needed
    return {
      b,
      a,
      d,
      c
      // Add other created records as needed
    };
  }



  @Get()
  @ApiResponse({ status: 201, description: 'Fetching all the data from postman' })
  async getAllEntities() {
    const bs = await this.bService.getAllBs();
    

    // You can customize the response structure as needed
    return {
      bs,
  
    };
  }
}
