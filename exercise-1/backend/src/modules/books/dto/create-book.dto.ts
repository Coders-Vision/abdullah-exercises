import { IsString, IsInt, IsOptional, IsNumber, MaxLength, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {

  @ApiProperty({
    example: 'Winnie-the-Pooh',
    required: true
  })
  @IsString()
  @MaxLength(255)
  title: string;

  @ApiProperty({
    example: 'A.A. Milne',
    required: true
  })
  @IsString()
  @MaxLength(255)
  author: string;

  @ApiProperty({
    example: '978-0525444435',
    required: false
  })
  @IsOptional()
  @IsString()
  isbn?: string;

  @ApiProperty({
    example: 'Adventures in the Hundred Acre Wood with Winnie-the-Pooh and friends.',
    required: false
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    example: 1926,
    required: false
  })
  @IsOptional()
  @IsInt()
  @Min(0)
  publishedYear?: number;

  @ApiProperty({
    example: 'Methuen & Co.',
    required: false
  })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  publisher?: string;

  @ApiProperty({
    example: 10,
    required: true
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  price?: number;

  @ApiProperty({
    example: 20,
    required: true
  })
  @IsInt()
  @Min(0)
  stock: number;
}



