import {
  Dispatch,
  FC,
  FormEventHandler,
  SetStateAction,
  useState,
} from "react";
import Select from "react-select";
import { Variations } from "./variations";
import { CharsList } from "./chars-list";
import CATEGORIES from "shared/mocks/categories";
import { Char, Product, Variation } from "shared/api/@types/product";
import styles from "./styles.module.scss";

type propTypes = {
  setProduct: Dispatch<SetStateAction<Product | undefined>>;
  featureSubmit: () => void;
};

export const ProductForm: FC<propTypes> = ({ setProduct, featureSubmit }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [vars, setVars] = useState<Variation[]>([
    { color: "#f3f3f3", images: [] },
  ]);
  const [chars, setChars] = useState<Char[]>([]);
  const [price, setPrice] = useState<number | undefined>();

  const submitHandler: FormEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault();

    console.log(name, description, price, vars);
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
          <Select
            isMulti
            placeholder="Оберіть потрібні категорії"
            options={CATEGORIES}
            className={styles.select}
          />
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
