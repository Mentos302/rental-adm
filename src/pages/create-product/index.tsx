import { NextPage } from "next";
import { CreateProductForm } from "features/products/create-form";
import { Layout } from "shared/ui/layout";

export const CreateProductPage: NextPage = () => {
  return (
    <Layout>
      <section>
        <div className="heading">
          <h1>Додавання нового товару</h1>
          <div>
            <button type="button" className="btn btn-success">
              Додати
            </button>
          </div>
        </div>
        <CreateProductForm />
      </section>
    </Layout>
  );
};
