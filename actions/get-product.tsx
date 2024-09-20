// import { Product } from "@/types";

// const URL = process.env.NEXT_PUBLIC_API_URL;

// if (!URL) {
//   throw new Error("NEXT_PUBLIC_API_URL is not defined");
// }

// const productUrl = `${URL}/products`;

// export const getProduct = async (id: string): Promise<Product> => {
//   try {
//     const res = await fetch(`${productUrl}/${id}`);

//     if (!res.ok) {
//       throw new Error(`Error fetching product: ${res.statusText}`);
//     }

//     const product: Product = await res.json();
//     return product;
//   } catch (error) {
//     console.error("Failed to fetch product", error);
//     throw error; // Проброс ошибки дальше, если нужно
//   }
// };
import { Product } from '@/types'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

export const getProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${URL}/${id}`)

  return res.json()
}