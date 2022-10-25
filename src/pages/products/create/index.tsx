import { NextPage } from "next";
import { CreateProduct } from "features/products/create";
import { Layout } from "shared/ui/layout";

export const CreateProductPage: NextPage = () => {
  return (
    <Layout>
      <section>
        <div className="heading">
          <h1>Додавання нового товару</h1>
        </div>
        <CreateProduct />
      </section>
    </Layout>
  );
};
