import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

export const Sibebar: FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.branding}>RentalBe</div>
        <nav className={styles.nav}>
          <Link href="/">
            <a>
              <Image
                src="/icons/processor.svg"
                alt="icon"
                width={20}
                height={20}
              />
              <span>Товари</span>
            </a>
          </Link>
          <Link href="/">
            <a>
              <Image src="/icons/apps.svg" alt="icon" width={20} height={20} />
              <span>Категорії</span>
            </a>
          </Link>
          <Link href="/kits">
            <a>
              <Image
                src="/icons/layers.svg"
                alt="icon"
                width={20}
                height={20}
              />
              <span>Набори</span>
            </a>
          </Link>

          <Link href="/orders">
            <a>
              <Image
                src="/icons/laptop.svg"
                alt="icon"
                width={20}
                height={20}
              />
              <span>Замовлення</span>
            </a>
          </Link>
          <Link href="/warehouse">
            <a>
              <Image
                src="/icons/warehouse.svg"
                alt="icon"
                width={20}
                height={20}
              />
              <span>Склад</span>
            </a>
          </Link>
        </nav>
      </div>
    </div>
  );
};
