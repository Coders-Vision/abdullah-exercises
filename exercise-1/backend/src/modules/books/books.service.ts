import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from 'src/common/enities/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    try {
      const menu = this.bookRepository.create(createBookDto);
      return await this.bookRepository.save(menu);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findAll(): Promise<Book[]> {
    return await this.bookRepository.find();
  }

  async findOne(id: string): Promise<Book> {
    const book = await this.bookRepository.findOne({ where: { id } });
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    return book;
  }

  async update(id: string, updateBookDto: UpdateBookDto): Promise<Book> {
    try {
      const book = await this.findOne(id);
      if (!book) {
        throw new NotFoundException('Book not found!');
      }
      Object.assign(book, updateBookDto);
      return await this.bookRepository.save(book);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async remove(id: string) {
    try {
      const result = await this.bookRepository.delete(id);
      if (result.affected === 0) {
        throw new NotFoundException(`A book "${id}" was not found`);
      }
      return { message: 'Book successfully deleted' };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
