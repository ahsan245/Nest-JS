import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Patron } from './patron.model';

@Injectable()
export class PatronService {
  constructor(
    @InjectRepository(Patron)
    private readonly patronRepository: Repository<Patron>,
  ) {}

  async getAllPatrons() {
    return await this.patronRepository.find();
  }

  async createPatron(patronData) {
    const patron = this.patronRepository.create(patronData);
    return await this.patronRepository.save(patron);
  }
}
