import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { LibraryModule } from './library/library.module';

@Module({
  imports: [
    ProductsModule, LibraryModule,
    MongooseModule.forRoot(
      'mongodb://127.0.0.1:27017/nest-js',
      { useNewUrlParser: true }, // Add this option


    ),
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
