// // LibraryBookPatronLoanDTO.ts
// export class abcdDTO {
//     b: {
//       name: string;
//       location: string;
//     };
//     a: {
//       title: string;
//       author: string;
//       library: number;
//     };
//     d: {
//       name: string;
//       library: string;

//     };
//     c: {
//       dueDate: Date;
//       library: string;

//     };
//   }
// LibraryBookPatronLoanDTO.ts
import { ApiProperty } from '@nestjs/swagger';

class BDTO {
  @ApiProperty()
  name: string;

  @ApiProperty()
  location: string;
}

class ADTO {
  @ApiProperty()
  title: string;

  @ApiProperty()
  author: string;

}

class DDTO {
  @ApiProperty()
  name: string;

}

class CDTO {
  @ApiProperty()
  dueDate: Date;

}

export class PostRequest {
  @ApiProperty({ type: BDTO })
  b: BDTO;

  @ApiProperty({ type: ADTO })
  a: ADTO;

  @ApiProperty({ type: DDTO })
  d: DDTO;

  @ApiProperty({ type: CDTO })
  c: CDTO;
}

export class abcdDTO {
    b: {
      name: string;
      location: string;
    };
    a: {
      title: string;
      author: string;
      b: number;
    };
    d: {
      name: string;
      b: string;

    };
    c: {
      dueDate: Date;
      b: string;

    };
  }
  