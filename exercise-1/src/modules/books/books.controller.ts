import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) { }

  @Post()
  @ApiOperation({ summary: 'Create a Book' })
  @ApiResponse({ status: 201, description: 'Book created.' })
  @ApiBody({ type: CreateBookDto })
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all Books' })
  @ApiResponse({ status: 200, description: 'Return all Books.' })
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get List of Books' })
  @ApiResponse({ status: 200, description: 'Return list Books.' })
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update Book by Id' })
  @ApiBody({ type: UpdateBookDto })
  @ApiResponse({ status: 200, description: 'Return Updated Book' })
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(id, updateBookDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete Book by Id' })
  @ApiResponse({ status: 200, description: 'Deletes Book' })
  remove(@Param('id') id: string) {
    return this.booksService.remove(id);
  }
}
