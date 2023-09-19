// create-book.dto.ts
import { IsString, IsNotEmpty, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly author: string;

  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  readonly library: number; // Assuming you need to associate the book with a library
}
