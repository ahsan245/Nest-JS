import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { B } from './b.model';

@Injectable()
export class BService {
  constructor(
    @InjectRepository(B)
    private readonly bRepository: Repository<B>,
  ) {}

  async getAllBs() {
    return await this.bRepository.find();
  }

  async createB(bData) {
    const b = this.bRepository.create(bData);
    return await this.bRepository.save(b);
  }
}
