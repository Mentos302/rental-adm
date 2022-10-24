export type Variation = {
  color: string;
  images: string[];
};

export interface Product {
  name: string;
  description: string;
  variations: Variation[];
  price: number;
}
