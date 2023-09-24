import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { D } from './d.model';
import { DController } from './d.controller';
import { DService } from './d.service';

@Module({
  imports: [TypeOrmModule.forFeature([D])],
  controllers: [DController],
  providers: [DService],
})
export class DModule {}
