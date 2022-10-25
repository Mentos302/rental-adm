import { NextPage } from "next";
import { Layout } from "shared/ui/layout";

export const WarehouseListPage: NextPage = () => {
  return (
    <Layout>
      <section>
        <div className="heading">
          <h1>Склад</h1>
        </div>
        <blockquote>В процесі...</blockquote>
      </section>
    </Layout>
  );
};
