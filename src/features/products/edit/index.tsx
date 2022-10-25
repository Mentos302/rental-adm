import { FC } from "react";
import { ProductForm } from "entities/products/form";
import { Product } from "shared/api/@types/product";

const PRODUCT: Product = {
  name: "Стілець",
  description: "Файна сідачка",
  variations: [
    {
      color: "#f3f3f3",
      images: [],
    },
    {
      color: "#f3f3f3",
      images: [],
    },
  ],
  categories: [],
  chars: [],
  price: 2500,
};

type propTypes = { id: string | string[] };

export const EditProduct: FC<propTypes> = ({ id }) => {
  return <ProductForm product={PRODUCT} />;
};
