export type Variation = {
  color: string;
  images: string[];
};

export type Char = { key: string; value: string };

export interface Product {
  name: string;
  description: string;
  variations: Variation[];
  chars: Char[];
  price: number;
}
