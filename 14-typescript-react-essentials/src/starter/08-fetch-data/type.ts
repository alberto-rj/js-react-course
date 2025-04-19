import axios from 'axios';
import { z } from 'zod';

export const productSchema = z.object({
  id: z.number(),
  title: z.string(),
  category: z.string(),
  price: z.number(),
  img: z.string(),
  desc: z.string(),
});

export type Product = z.infer<typeof productSchema>;

const apiURL = '/data.json';

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await axios.get<Product[]>(apiURL);
  const rawData = response.data;
  const result = productSchema.array().safeParse(rawData);

  if (!result.success) {
    console.log(result.error.message);
    throw new Error(`Failed to parse products`);
  }

  return result.data as Product[];
};
