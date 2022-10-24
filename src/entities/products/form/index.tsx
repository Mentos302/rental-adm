import {
  Dispatch,
  FC,
  FormEventHandler,
  SetStateAction,
  useState,
} from "react";

import { Variations } from "./variations";
import { CharsList } from "./chars-list";
import { Char, Product, Variation } from "shared/api/@types/product";
import styles from "./styles.module.scss";
import { Categories } from "./categories";
import { Category } from "shared/api/@types/category";

type propTypes = {
  setProduct: Dispatch<SetStateAction<Product | undefined>>;
  featureSubmit: () => void;
};

export const ProductForm: FC<propTypes> = ({ setProduct, featureSubmit }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [vars, setVars] = useState<Variation[]>([{ color: "#f3f3f3" }]);
  const [chars, setChars] = useState<Char[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [price, setPrice] = useState<number | undefined>();

  const submitHandler: FormEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault();

    console.log(name, description, categories, price, vars);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className={styles.submit}>
          <button type="submit" className="btn btn-success">
            Додати
          </button>
        </div>
        <div className="input_box">
          <span>Назва</span>
          <input
            type="text"
            required
            defaultValue={name}
            onChange={(ev) => setName(ev.target.value)}
          />
        </div>
        <div className="input_box">
          <span>Опис</span>
          <textarea
            rows={5}
            onChange={(ev) => setDescription(ev.target.value)}
          ></textarea>
        </div>
        <Variations vars={vars} setVars={setVars} />
        <div className="input_box">
          <span>Характеристики</span>
          <CharsList chars={chars} setChars={setChars} />
        </div>
        <div className="input_box">
          <span>Категорії</span>
          <Categories categories={categories} setCategories={setCategories} />
        </div>
        <div className="input_box">
          <span>Ціна (грн.)</span>
          <input
            type="number"
            placeholder="XXXX"
            min={0}
            required
            onChange={(ev) => setPrice(parseInt(ev.target.value))}
          />
        </div>
      </form>
    </>
  );
};
