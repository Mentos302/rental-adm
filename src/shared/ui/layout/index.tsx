import { FC, ReactNode } from "react";
import { Header } from "widgets/header";
import { Sibebar } from "widgets/sidebar";
import styles from "./styles.module.scss";

type propTypes = { children: ReactNode | ReactNode[] };

export const Layout: FC<propTypes> = ({ children }) => {
  return (
    <div className="container">
      <div className={styles.root}>
        <Sibebar />
        <main>
          <Header />
          {children}
        </main>
      </div>
    </div>
  );
};
