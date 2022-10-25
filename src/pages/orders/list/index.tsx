import { NextPage } from "next";
import { Layout } from "shared/ui/layout";

export const OrdersListPage: NextPage = () => {
  return (
    <Layout>
      <section>
        <div className="heading">
          <h1>Замовлення</h1>
        </div>
        <blockquote>В процесі...</blockquote>
      </section>
    </Layout>
  );
};
