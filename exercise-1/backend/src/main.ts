import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';
import { AllExceptionsFilter } from './common/filters/http-exception.filter';
import { AppModule } from './app.module';
import { Logger, LoggerErrorInterceptor } from 'nestjs-pino';
import { setupSwagger } from './common/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useLogger(app.get(Logger));
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.setGlobalPrefix('api');

  app.useGlobalInterceptors(new LoggerErrorInterceptor());
  app.useGlobalFilters(new AllExceptionsFilter(app.get(Logger)));

  const PORT = 8080;
  const getFrontEndUrls = ['http://localhost:8081'];

  app.enableCors({
    origin: getFrontEndUrls,
  });

  setupSwagger(
    app,
    'Book Store App',
    'API documentation for Book Store App',
    '1.0',
  );
  await app.listen(PORT, () => {
    const HOST = `http://localhost:${PORT}`;
    console.log(` 
     Book store app started successfully
     Node Version : ${process.version}
     Port : ${`${PORT}`} 
     Date : ${`${new Date().toLocaleString()}`}
     Timezone : ${Intl.DateTimeFormat().resolvedOptions().timeZone}
     Env  : ${`${process.env.NODE_ENV}`}
    `);
  });
}
bootstrap();
