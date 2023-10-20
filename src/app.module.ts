import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BModule } from './b/b.module';
import { AModule } from './a/a.module';
import { DModule } from './d/d.module';
import entities from './typeorm/index';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "mariadb",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "", 
    "database": "testing",
    entities,
    "synchronize": true,
    "logging": true
    }),
    BModule,

    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
