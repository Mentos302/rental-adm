import { FC, useState } from "react";
import { ProductForm } from "entities/products/form";
import { Product } from "shared/api/@types/product";

export const CreateProduct: FC = () => {
  const [product, setProduct] = useState<Product | undefined>();

  const submitHandler = () => {
    console.log(product);
  };

  return <ProductForm setProduct={setProduct} featureSubmit={submitHandler} />;
};
