import { FC, FormEventHandler, useReducer, useRef, useState } from "react";
import { INITIAL_PRODUCT, ProductFormContext, productReducer } from "./model";
import { Categories } from "./categories";
import { CharsList } from "./chars-list";
import { Variations } from "./variations";
import { Product } from "shared/api/@types/product";
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

    console.log({
      name: nameRef.current && nameRef.current.value,
      description: descriptionRef.current && descriptionRef.current.value,
      variations,
      categories,
      chars,
      price: priceRef.current && priceRef.current.value,
    });
  };

  const editHandler = () => {
    if (!isEdited) setIsEdited(true);
  };

  return (
    <ProductFormContext.Provider value={{ dispatch, editHandler }}>
      <form onSubmit={submitHandler}>
        <div className="input_box">
          <span>Назва</span>
          <input
            type="text"
            defaultValue={product.name}
            required
            ref={nameRef}
            onChange={editHandler}
          />
        </div>
        <div className="input_box">
          <span>Опис</span>
          <textarea
            defaultValue={product.description}
            required
            ref={descriptionRef}
            rows={5}
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
            defaultValue={product.price || ""}
            required
            ref={priceRef}
            placeholder="XXXX"
            min={0}
            onChange={editHandler}
          />
        </div>
        {product.name ? (
          <button
            type={isEdited ? "submit" : "button"}
            className={`btn btn-info ${isEdited ? null : "disabled"} ${
              styles.add_btn
            }`}
          >
            Зберегти
          </button>
        ) : (
          <button type="submit" className={`btn btn-success ${styles.add_btn}`}>
            Додати
          </button>
        )}
      </form>
    </ProductFormContext.Provider>
  );
};
