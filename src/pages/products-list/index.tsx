import { NextPage } from "next";
import Image from "next/image";
import { useProducts } from "./model";
import { ProductsList } from "entities/products/list";
import styles from "./styles.module.scss";
import { Sibebar } from "widgets/sidebar";
import { Layout } from "shared/ui/layout";
import { Header } from "widgets/header";

export const ProductsListPage: NextPage = () => {
  const products = useProducts();

  return (
    <Layout>
      <Sibebar />
      <main>
        <Header />
        <section>
          <div className="heading">
            <h1>Список товарів</h1>
            <div>
              <Image
                src="/icons/search.svg"
                alt="search"
                width={30}
                height={30}
              />
              <button type="button" className="btn btn-success">
                Додати
              </button>
            </div>
          </div>
          <ProductsList products={products} />
        </section>
      </main>
    </Layout>
  );
};
