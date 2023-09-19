import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patron } from './patron.model';
import { PatronController } from './patron.controller';
import { PatronService } from './patron.service';

@Module({
  imports: [TypeOrmModule.forFeature([Patron])],
  controllers: [PatronController],
  providers: [PatronService],
})
export class PatronModule {}
