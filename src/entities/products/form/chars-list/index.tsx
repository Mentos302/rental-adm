import {
  FC,
  KeyboardEventHandler,
  useRef,
  useState,
  useContext,
  memo,
} from "react";
import Image from "next/image";
import { ProductFormContext } from "../model";
import { Char } from "shared/api/@types/product";
import styles from "./styles.module.scss";

type propTypes = { chars: Char[] };

export const CharsList: FC<propTypes> = memo(({ chars }) => {
  const { dispatch, editHandler } = useContext(ProductFormContext)!;
  const [key, setKey] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const keyInput = useRef<HTMLInputElement | null>(null);
  const valueInput = useRef<HTMLInputElement | null>(null);

  const addChar = () => {
    if (key && value) {
      dispatch({ type: "ADD_CHAR", payload: { key, value } });

      setKey("");
      setValue("");
      if (keyInput.current) keyInput.current.value = "";
      if (valueInput.current) valueInput.current.value = "";

      editHandler();
    } else if (key) {
      if (valueInput.current) valueInput.current.focus();
    }
  };

  const removeChar = (index: number) => {
    dispatch({ type: "REMOVE_CHAR", payload: index });

    editHandler();
  };

  const handleEnterSubmit: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      if (keyInput.current) keyInput.current.focus();
      addChar();
    }
  };

  return (
    <div className={styles.list}>
      <div className={styles.item}>
        <span>Назва</span>
        <span>Значення</span>
      </div>
      {chars.map((char, i) => (
        <div className={styles.item} key={i}>
          <span>{char.key}</span>
          <span>{char.value}</span>
          <button
            type="button"
            className={styles.remove}
            onClick={() => removeChar(i)}
          >
            <Image
              src="/icons/delete.svg"
              alt="delete"
              width={12}
              height={12}
            />
          </button>
        </div>
      ))}
      <div className={styles.item}>
        <input
          type="text"
          placeholder="Введіть назву характеристики"
          ref={keyInput}
          onChange={(ev) => setKey(ev.target.value)}
          onKeyDown={handleEnterSubmit}
        />
        <input
          type="text"
          placeholder="Введіть значення характеристики"
          ref={valueInput}
          onChange={(ev) => setValue(ev.target.value)}
          onKeyDown={handleEnterSubmit}
        />
      </div>
    </div>
  );
});
