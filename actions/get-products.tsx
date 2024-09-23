// import { Product } from '@/types'
// import qs from 'query-string'

// const URL = process.env.NEXT_PUBLIC_API_URL;

// if (!URL) {
//   throw new Error('NEXT_PUBLIC_API_URL is not defined');
// }

// interface Query {
//   categoryId?: string;
//   colorId?: string;
//   sizeId?: string;
//   isFeatured?: boolean;
// }

// export const getProducts = async (query: Query): Promise<Product[]> => {
//   const url = qs.stringifyUrl({
//     url: `${URL}/products`,
//     query: {
//       categoryId: query.categoryId,
//       colorId: query.colorId,
//       sizeId: query.sizeId,
//       isFeatured: query.isFeatured,
//     },
//   });

//   try {
//     const res = await fetch(url);

//     if (!res.ok) {
//       throw new Error(`Error fetching products: ${res.statusText}`);
//     }

//     const data: Product[] = await res.json();
//     return data;
//   } catch (error) {
//     console.error('Failed to fetch products:', error);
//     return []; // Возвращаем пустой массив в случае ошибки
//   }
// };
import { Product } from '@/types'
import qs from 'query-string'

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

interface Query {
  categoryId?: string
  colorId?: string
  sizeId?: string
  isFeatured?: boolean
}

export const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      categoryId: query.categoryId,
      colorId: query.colorId,
      sizeId: query.sizeId,
      isFeatured: query.isFeatured,
    },
  })

  const res = await fetch(url)
 
  return res.json()
}