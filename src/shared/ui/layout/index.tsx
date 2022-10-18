import { FC, ReactNode } from "react";
import styles from "./styles.module.scss";

type propTypes = { children: ReactNode[] };

export const Layout: FC<propTypes> = ({ children }) => {
  return (
    <div className="container">
      <div className={styles.root}>{children}</div>
    </div>
  );
};
