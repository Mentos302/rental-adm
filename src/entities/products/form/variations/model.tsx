import { createContext, Dispatch, SetStateAction } from "react";
import { Variation } from "shared/api/@types/product";

export const MAX_VARIATIONS = 6;
export const MAX_PHOTO_QUANTITY = 8;

type contextTypes = {
  vars: Variation[];
  activeVar: number;
  setActiveVar: Dispatch<SetStateAction<number>>;
  updateVar: (type: "images" | "color", payload: string | string[]) => void;
} | null;

export const VariationContext = createContext<contextTypes>(null);
