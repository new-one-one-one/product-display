export interface IProduct {
  id: number;
  name: string;
  price: number;
  images: string;
  average_rating: number;
}

export const products: IProduct[] = [];
