import {
  FC,
  FormEventHandler,
  useCallback,
  useReducer,
  useRef,
  useState,
} from "react";
import { Product } from "shared/api/@types/product";
import { Categories } from "./categories";
import { CharsList } from "./chars-list";
import { INITIAL_PRODUCT, ProductFormContext, productReducer } from "./model";
import { Variations } from "./variations";
import styles from "./styles.module.scss";

type propTypes = { product?: Product };

export const ProductForm: FC<propTypes> = ({ product = INITIAL_PRODUCT }) => {
  const [state, dispatch] = useReducer(productReducer, product);
  const [isEdited, setIsEdited] = useState(false);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const descriptionRef = useRef<HTMLTextAreaElement | null>(null);
  const priceRef = useRef<HTMLInputElement | null>(null);

  const { variations, categories, chars } = state;

  const submitHandler: FormEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault();

    console.log(nameRef.current && nameRef.current.value);
  };

  const editHandler = useCallback(() => {
    if (!isEdited) setIsEdited(true);
  }, [isEdited]);

  return (
    <ProductFormContext.Provider value={{ dispatch, editHandler }}>
      <form onSubmit={submitHandler}>
        <div className={styles.submit}>
          {product ? (
            <button
              type={isEdited ? "submit" : "button"}
              className={`btn btn-info ${isEdited ? null : "disabled"}`}
            >
              Зберегти
            </button>
          ) : (
            <button type="submit" className="btn btn-success">
              Додати
            </button>
          )}
        </div>
        <div className="input_box">
          <span>Назва</span>
          <input
            type="text"
            required
            ref={nameRef}
            name="name"
            onChange={editHandler}
          />
        </div>
        <div className="input_box">
          <span>Опис</span>
          <textarea
            ref={descriptionRef}
            rows={5}
            name="description"
            onChange={editHandler}
          ></textarea>
        </div>
        <Variations vars={variations} />
        <div className="input_box">
          <span>Характеристики</span>
          <CharsList chars={chars} />
        </div>
        <div className="input_box">
          <span>Категорії</span>
          <Categories categories={categories} />
        </div>
        <div className="input_box">
          <span>Ціна (грн.)</span>
          <input
            type="number"
            required
            ref={priceRef}
            placeholder="XXXX"
            min={0}
            onChange={editHandler}
          />
        </div>
      </form>
    </ProductFormContext.Provider>
  );
};
