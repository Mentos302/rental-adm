import { FC } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

export const Header: FC = () => {
  return (
    <div className={styles.root}>
      <span>Привіт, Киця 👋</span>
      <div className={styles.viewer}>
        <Image
          src="/icons/notification.svg"
          alt="notification"
          width={22}
          height={22}
        />
        <div className={styles.user}>
          <div className={styles.name}>
            <b>Ігор Кицькевич</b>
            <span>CEO</span>
          </div>
          <Image src="/mocks/cat.webp" alt="mock" width={50} height={50} />
        </div>
      </div>
    </div>
  );
};
