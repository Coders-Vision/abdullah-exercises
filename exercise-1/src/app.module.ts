import { Module } from '@nestjs/common';
import { BooksModule } from './modules/books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './common/enities/book.entity';
import { LoggerModule } from './common/logger';

@Module({
  imports: [
    LoggerModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'exercise-1-db/sql',
      synchronize: true,
      entities: [Book],
    }),
    BooksModule,
  ],
})
export class AppModule {}
