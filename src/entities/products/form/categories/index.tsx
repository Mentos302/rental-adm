import { FC, memo, useContext } from "react";
import Select from "react-select";
import { ProductFormContext } from "../model";
import CATEGORIES from "shared/mocks/categories";
import styles from "./styles.module.scss";

type propTypes = { categories: string[] };

export const Categories: FC<propTypes> = memo(({ categories }) => {
  const { dispatch, editHandler } = useContext(ProductFormContext)!;

  const defaultValue = categories.map((cat) => ({
    label: cat,
    value: cat,
  }));

  const changeHandler = (options: any) => {
    dispatch({
      type: "UPDATE_CATEGORIES",
      payload: options.map((op: { value: string }) => op.value),
    });

    editHandler();
  };

  return (
    <Select
      isMulti
      placeholder="Оберіть потрібні категорії"
      options={CATEGORIES}
      defaultValue={defaultValue}
      className={styles.select}
      onChange={changeHandler}
      instanceId="long-value-selectASF"
    />
  );
});
