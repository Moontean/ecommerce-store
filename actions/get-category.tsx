// import { Category } from "@/types"

// const URL = process.env.NEXT_PUBLIC_API_URL;

// if (!URL) {
//   throw new Error("NEXT_PUBLIC_API_URL is not defined");
// }

// const categoryUrl = `${URL}/categories`;

// export const getCategory = async (id: string): Promise<Category> => {
//   try {
//     const res = await fetch(`${categoryUrl}/${id}`);

//     if (!res.ok) {
//       throw new Error(`Error fetching category: ${res.statusText}`);
//     }

//     const data: Category = await res.json();
//     return data;
//   } catch (error) {
//     console.error("Failed to fetch category", error);
//     throw error; 
//   }
// };
import { Category } from '@/types'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`

export const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL)

  return res.json()
}