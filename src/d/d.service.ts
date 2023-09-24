import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { D } from './d.model';

@Injectable()
export class DService {
  constructor(
    @InjectRepository(D)
    private readonly dRepository: Repository<D>,
  ) {}

  async getAllDs() {
   
    return await this.dRepository
    .createQueryBuilder('d')
    .leftJoinAndSelect('d.b', 'b')
    .getMany();
}

  async createD(pdData) {
    const d = this.dRepository.create(pdData);
    return await this.dRepository.save(d);
  }
}
