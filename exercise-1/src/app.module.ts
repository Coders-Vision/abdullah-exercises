import { Module } from '@nestjs/common';
import { BooksModule } from './modules/books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './common/enities/book.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/sql',
      synchronize: true,
      entities: [Book],
    }),
    BooksModule,
  ],
})
export class AppModule {}
