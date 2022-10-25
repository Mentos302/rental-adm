import { createContext, Dispatch } from "react";
import { Product } from "shared/api/@types/product";

export const INITIAL_PRODUCT: Product = {
  name: "",
  description: "",
  variations: [
    {
      color: "#f3f3f3",
      images: [],
    },
  ],
  categories: [],
  chars: [],
  price: 0,
};

export const productReducer = (state: Product, action: any): Product => {
  const { type, payload } = action;
  const { chars, variations } = state;

  switch (type) {
    case "ADD_VARIATION":
      return { ...state, variations: [...variations, payload] };
    case "REMOVE_VARIATION":
      return {
        ...state,
        variations: variations.filter((_, i) => i !== payload),
      };
    case "UPDATE_VARIATION":
      return { ...state, variations: payload };
    case "UPDATE_CATEGORIES":
      return { ...state, categories: payload };
    case "ADD_CHAR":
      return { ...state, chars: [...chars, payload] };
    case "REMOVE_CHAR":
      return {
        ...state,
        chars: chars.filter((_, i) => i !== payload),
      };
    default:
      return state;
  }
};

type ActionsTypes =
  | "ADD_VARIATION"
  | "REMOVE_VARIATION"
  | "UPDATE_VARIATION"
  | "UPDATE_CATEGORIES"
  | "ADD_CHAR"
  | "REMOVE_CHAR";

type ContextTypes = {
  dispatch: Dispatch<{
    type: ActionsTypes;
    payload: any;
  }>;
  editHandler: () => void;
} | null;

export const ProductFormContext = createContext<ContextTypes>(null);
