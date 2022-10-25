export type Variation = {
  color: string;
  images?: any;
};

export type Char = { key: string; value: string };

export interface Product {
  name: string;
  description: string;
  variations: Variation[];
  categories: string[];
  chars: Char[];
  price: number;
}
