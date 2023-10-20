import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { C } from './c.model';

@Injectable()
export class CService {
  constructor(
    @InjectRepository(C)
    private readonly cRepository: Repository<C>,
  ) {}

  async getAllCs() {
    return await this.cRepository
      .createQueryBuilder('c')
      .leftJoinAndSelect('c.b', 'b')
      .getMany();
  }

  async createC(cData) {
    const c = this.cRepository.create(cData);
    return await this.cRepository.save(c);
  }
}
