import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  ParseIntPipe,
  Query,
  ParseBoolPipe,
  Patch,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CarService } from './car.service';
import { createCarSchema, CreateCarZodDto } from './dto/createCarZod.dto';
import { ZodValidationPipe } from './pipes/zodValidationPipe';
import { ParseIdPipe } from './pipes/parseIdPipe';
import { RequestHeader } from './pipes/request-header';
import { HeadersDto } from './dto/headers.dto';

@Controller('car')
export class CarController {
  constructor(private carService: CarService) {
    // this.carService = carService;
  }

  @Get()
  findAll() {
    return this.carService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id) {
    return this.carService.findOne(id);
  }

  @Post()
  @UsePipes(new ZodValidationPipe(createCarSchema))
  create(@Body() dto: CreateCarZodDto) {
    return this.carService.create(dto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIdPipe) id,
    @Body()
    body: CreateCarZodDto,
    @RequestHeader(new ValidationPipe({ validateCustomDecorators: true }))
    header: HeadersDto,
  ) {
    return this.carService.update();
  }
}
