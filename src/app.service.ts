import { Injectable } from '@nestjs/common';
import { Library } from './library/library.model';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(Library) private readonly productModel: Repository<Library>,
  ){}
  async getHello(){
    // const data =await this.productModel.findOne({relations: ['books', 'patrons', 'loans'],where: {id: 1}});
    const data = await this.productModel.createQueryBuilder("library")
    .leftJoinAndSelect('library.books','books')
    .leftJoinAndSelect('library.loans','loans')
    .leftJoinAndSelect('library.patrons','patrons')
    .where("library.id = :id", { id: 1 })
     .getCount();
    return data;
  }
}


