import { ZodSchema } from 'zod';
import {
  BadRequestException,
  PipeTransform,
  ArgumentMetadata,
} from '@nestjs/common';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}
  transform(value: any, metadata: ArgumentMetadata) {
    const parsedValue = this.schema.safeParse(value);
    if (parsedValue.success) return parsedValue.data;

    throw new BadRequestException(parsedValue.error.format());
  }
}
