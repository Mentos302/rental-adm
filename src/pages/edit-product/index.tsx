import { NextPage } from "next";
import { useRouter } from "next/router";
import { EditProduct } from "features/products/edit";
import { Layout } from "shared/ui/layout";

export const EditProductPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <section>
        <div className="heading">
          <h1>Редагування товару</h1>
        </div>
        {id && <EditProduct id={id} />}
      </section>
    </Layout>
  );
};
