import { Module } from '@nestjs/common';
import { BooksModule } from './modules/books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './common/enities/book.entity';
import { LoggerModule } from './common/logger';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'frontend', 'dist'),
    }),
    LoggerModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'exercise-1-db/sql',
      synchronize: true,
      entities: [Book],
    }),
    BooksModule,
  ],
  controllers:[]
})
export class AppModule {}
