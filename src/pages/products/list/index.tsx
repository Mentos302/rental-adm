import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { useProducts } from "./model";
import { ProductsList } from "entities/products/list";
import { Layout } from "shared/ui/layout";

export const ProductsListPage: NextPage = () => {
  const products = useProducts();

  return (
    <Layout>
      <section>
        <div className="heading">
          <h1>Товари</h1>
          <div>
            <Image
              src="/icons/search.svg"
              alt="search"
              width={30}
              height={30}
            />
            <Link href="/products/create">
              <button type="button" className="btn btn-success">
                Додати
              </button>
            </Link>
          </div>
        </div>
        <ProductsList products={products} />
      </section>
    </Layout>
  );
};
