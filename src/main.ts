import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Relational Project on NEST JS')
    .setDescription('This is a project on relational database using NEST JS')
    .setVersion('1.0')
    .addTag('book') // Use the same tags you added to your controllers
    .addTag('library')
    .addTag('loan')
    .addTag('patron')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}

bootstrap();
