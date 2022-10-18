import { FC } from "react";
import Image from "next/image";
import { Product } from "shared/api/@types/product";
import styles from "./styles.module.scss";

type propTypes = { products: Product[] };

export const ProductsList: FC<propTypes> = ({ products }) => {
  return (
    <ul className={styles.root}>
      <li>Мініатюра та назва</li>
      {products.map((pr, i) => (
        <li key={i}>
          <div className={styles.item}>
            <Image
              src="/mocks/162188.jpeg"
              alt="mock"
              width={50}
              height={50}
              objectFit={"contain"}
              objectPosition={"center"}
            />
            <span className={styles.name}>{pr.name}</span>
          </div>
          <button>
            <Image
              src="/icons/delete.svg"
              alt="delete"
              width={25}
              height={25}
            />
          </button>
        </li>
      ))}
    </ul>
  );
};
