// import { Billboard } from "@/types";

// const URL = process.env.NEXT_PUBLIC_API_URL;

// if (!URL) {
//   throw new Error("NEXT_PUBLIC_API_URL is not defined");
// }

// const billboardsUrl = `${URL}/billboards`;

// export const getBillboard = async (id: string): Promise<Billboard> => {
//   try {
//     const res = await fetch(`${billboardsUrl}/${id}`);

//     if (!res.ok) {
//       throw new Error(`Error fetching billboard: ${res.statusText}`);
//     }

//     const data: Billboard = await res.json();
//     return data;
//   } catch (error) {
//     console.error("Failed to fetch billboard", error);
//     throw error; // Можно пробросить ошибку дальше, если необходимо
//   }
// };
import { Billboard } from '@/types'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`

export const getBillboard = async (id: string): Promise<Billboard> => {
  const res = await fetch(`${URL}/${id}`)

  return res.json()
}