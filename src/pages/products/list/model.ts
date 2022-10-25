import { Product } from "shared/api/@types/product";
import MOCK_DATA from "shared/mocks/products";

export const useProducts = (): any[] => {
  return MOCK_DATA;
};
