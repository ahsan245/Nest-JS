import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibraryModule } from './library/library.module';
import { BookModule } from './book/book.module';
import { LoanModule } from './loan/loan.module';
import { PatronModule } from './patron/patron.module';
import entities from './typeorm/index';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "mariadb",
    "host": "localhost",
    "port": 3306,
    "username": "osticket",
    "password": "admin", 
    "database": "nest",
    entities,
    "synchronize": true,
    "logging": true
    }),
    LibraryModule,

    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
