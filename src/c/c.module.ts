import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { C } from './c.model';
import { CController } from './c.controller';
import { CService } from './c.service';

@Module({
  imports: [TypeOrmModule.forFeature([C])],
  controllers: [CController],
  providers: [CService],
})
export class CModule {}
