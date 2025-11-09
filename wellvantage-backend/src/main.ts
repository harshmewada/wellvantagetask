import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const port = configService.get<number>('http.port', { infer: true });

  console.log('App port', port);
  const config = new DocumentBuilder()
    .setTitle('WellVantage Apis')
    .setDescription(
      'The collection of APIs for WellVantage Web And Mobile Application',
    )
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-doc', app, documentFactory);
  app.setGlobalPrefix('api');
  await app.listen(port);
}
bootstrap();
