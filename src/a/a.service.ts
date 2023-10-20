import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { A } from './a.model';


@Injectable()
export class AService {
    constructor(
        @InjectRepository(A)
        private readonly aRepository: Repository<A>,
      ) {}
    
    

  async getAllAs() {
    return await this.aRepository
    .createQueryBuilder('a')
    .leftJoinAndSelect('a.b', 'b')
    .getMany();
}


  async createA(AData) {
    const book = this.aRepository.create(AData);
    return await this.aRepository.save(book);
  }
}
