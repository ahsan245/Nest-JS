import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { B } from './b.model';
import { A } from '../a/a.model';
import { D } from '../d/d.model';
import { C } from '../c/c.model';
import { BController } from './b.controller';
import { BService } from './b.service';
import { AService } from '../a/a.service';
import { DService } from '../d/d.service';
import { CService } from '../c/c.service';
import { AController } from '../a/a.controller';
import { DController } from '../d/d.controller';
import { CController } from '../c/c.controller';



@Module({
  imports: [TypeOrmModule.forFeature([B, A, D, C])],
  controllers: [BController,AController,DController,CController],
  providers: [BService, AService,DService,CService]
})
export class BModule {}
