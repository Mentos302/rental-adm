import { Dispatch, FC, SetStateAction } from "react";
import Select from "react-select";
import { Category } from "shared/api/@types/category";
import CATEGORIES from "shared/mocks/categories";
import styles from "./styles.module.scss";

type propTypes = {
  categories: string[];
  setCategories: Dispatch<SetStateAction<string[]>>;
};

export const Categories: FC<propTypes> = ({ categories, setCategories }) => {
  const defaultValue = categories.map((cat) => ({
    label: cat,
    value: cat,
  }));

  const changeHandler = (options: any) => {
    setCategories(options.map((op: { value: string }) => op.value));
  };

  return (
    <Select
      isMulti
      placeholder="Оберіть потрібні категорії"
      options={CATEGORIES}
      defaultValue={defaultValue}
      className={styles.select}
      onChange={changeHandler}
    />
  );
};
