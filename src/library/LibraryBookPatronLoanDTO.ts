// LibraryBookPatronLoanDTO.ts
import { ApiProperty } from '@nestjs/swagger';

class LibraryDTO {
  @ApiProperty()
  name: string;

  @ApiProperty()
  location: string;
}

class BookDTO {
  @ApiProperty()
  title: string;

  @ApiProperty()
  author: string;

}

class PatronDTO {
  @ApiProperty()
  name: string;

}

class LoanDTO {
  @ApiProperty()
  dueDate: Date;

}

export class PostRequest {
  @ApiProperty({ type: LibraryDTO })
  library: LibraryDTO;

  @ApiProperty({ type: BookDTO })
  book: BookDTO;

  @ApiProperty({ type: PatronDTO })
  patron: PatronDTO;

  @ApiProperty({ type: LoanDTO })
  loan: LoanDTO;
}

export class LibraryBookPatronLoanDTO {
    library: {
      name: string;
      location: string;
    };
    book: {
      title: string;
      author: string;
      library: number;
    };
    patron: {
      name: string;
      library: string;

    };
    loan: {
      dueDate: Date;
      library: string;

    };
  }
  