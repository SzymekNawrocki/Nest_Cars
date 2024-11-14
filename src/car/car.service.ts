import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from 'src/entities/property.entity';
import { Repository } from 'typeorm';
import { CreateCarZodDto } from './dto/createCarZod.dto';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(Car)
    private carRepo: Repository<Car>,
  ) {}

  async findOne(id: number) {
    const car = await this.carRepo.findOne({
      where: {
        id,
      },
    });
    if (!car) throw new NotFoundException();
    return car;
  }

  async findAll() {
    return await this.carRepo.find();
  }

  async create(dto: CreateCarZodDto) {
    return await this.carRepo.save(dto);
  }

  async update() {}

  async delete() {}
}
