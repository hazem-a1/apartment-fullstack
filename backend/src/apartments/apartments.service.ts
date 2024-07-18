import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Apartment } from './entities/apartment.schema';
import { Model } from 'mongoose';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { readFileSync } from 'fs';

@Injectable()
export class ApartmentsService implements OnModuleInit {
  constructor(
    @InjectModel(Apartment.name) private apartmentModel: Model<Apartment>,
  ) {}

  async onModuleInit(): Promise<void> {
    const data = await this.apartmentModel.find().exec();

    if (data.length > 0) {
      return;
    } else {
      try {
        const initData = JSON.parse(
          readFileSync(
            process.cwd() + '/dist/assets/sampleData/aqaarmap.json',
            'utf8',
          ),
        );
        await this.apartmentModel.insertMany(initData);
      } catch (error) {
        console.log(error);
      }
    }
  }

  async create(createApartmentDto: CreateApartmentDto) {
    const createdUser = new this.apartmentModel(createApartmentDto);
    return createdUser.save();
  }

  async findAll(paginationQueryDto: PaginationQueryDto) {
    return this.apartmentModel
      .find({}, {}, { sort: { _id: -1 } })
      .skip(paginationQueryDto.offset)
      .limit(paginationQueryDto.limit)
      .exec();
  }

  async findOne(id: string) {
    return this.apartmentModel.findById(id).exec();
  }

  // update(id: number, updateApartmentDto: UpdateApartmentDto) {
  //   return `This action updates a #${id} apartment`;
  // }
}
