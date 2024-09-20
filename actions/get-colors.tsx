// import { Color } from "@/types"

// const URL = process.env.NEXT_PUBLIC_API_URL;

// if (!URL) {
//   throw new Error("NEXT_PUBLIC_API_URL is not defined");
// }

// const colorsUrl = `${URL}/colors`;

// export const getColors = async (): Promise<Color[]> => {
//   try {
//     const res = await fetch(colorsUrl);

//     if (!res.ok) {
//       throw new Error(`Error fetching colors: ${res.statusText}`);
//     }

//     const data: Color[] = await res.json();
//     return data;
//   } catch (error) {
//     console.error("Failed to fetch colors", error);
//     return []; // Возвращаем пустой массив в случае ошибки
//   }
// };
