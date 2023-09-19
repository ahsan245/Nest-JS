import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Loan } from './loan.model';

@Injectable()
export class LoanService {
  constructor(
    @InjectRepository(Loan)
    private readonly loanRepository: Repository<Loan>,
  ) {}

  async getAllLoans() {
    return await this.loanRepository
      .createQueryBuilder('loan')
      .leftJoinAndSelect('loan.library', 'library')
      .leftJoinAndSelect('loan.book', 'book')
      .getMany();
  }

  async createLoan(loanData) {
    const loan = this.loanRepository.create(loanData);
    return await this.loanRepository.save(loan);
  }
}
