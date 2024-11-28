import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';
import { AllExceptionsFilter } from './common/filters/http-exception.filter';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.setGlobalPrefix('api');

  app.useGlobalFilters(new AllExceptionsFilter());
  
  const PORT = process.env.PORT || 3000;


  await app.listen(PORT, () => {
    const HOST = `http://localhost:${PORT}`
    console.log(` 
     Book store app started successfully
     Node Version : ${process.version}
     Port : ${(`${PORT}`)} 
     Date : ${(`${new Date().toLocaleString()}`)}
     Timezone : ${Intl.DateTimeFormat().resolvedOptions().timeZone}
     Env  : ${(`${process.env.NODE_ENV}`)}
    `);
  });
}
bootstrap();