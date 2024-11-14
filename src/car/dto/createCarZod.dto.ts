import { z } from 'zod';

export const createCarSchema = z
  .object({
    name: z.string(),
    description: z.string().min(5),
    year: z.number().positive(),
    type: z.string(),
    price: z.number().positive(),
  })
  .required();

export type CreateCarZodDto = z.infer<typeof createCarSchema>;
