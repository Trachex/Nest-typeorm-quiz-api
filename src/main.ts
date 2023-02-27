import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import appConfig from './config/app.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const docConfig = new DocumentBuilder()
    .setTitle('Quiz API Documentation')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, docConfig);

  SwaggerModule.setup('docs', app, document);
  await app.listen(appConfig().appPort);
}
bootstrap();
