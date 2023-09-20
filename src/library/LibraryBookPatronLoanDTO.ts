// LibraryBookPatronLoanDTO.ts
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
  