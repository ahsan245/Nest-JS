import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { A } from './a.model';
import { AController } from './a.controller';
import { AService } from './a.service';

@Module({
  imports: [TypeOrmModule.forFeature([A])],
  controllers: [AController],
  providers: [AService],
})
export class AModule {}
