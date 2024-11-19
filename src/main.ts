import * as dotenv from 'dotenv'
dotenv.config();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  )

  const config = new DocumentBuilder()
  .setTitle('Mesa Enterprice API')
  .setDescription('Rest api for Mesa Enterprise')
  .setVersion('1.0')
  .build();
  const document = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors();

  await app.listen(3000);
}
bootstrap();
