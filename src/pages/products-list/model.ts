import { Product } from "shared/api/@types/product";
import MOCK_DATA from "shared/mocks/products";

export const useProducts = (): Product[] => {
  return MOCK_DATA;
};
