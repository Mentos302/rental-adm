import { FC, KeyboardEventHandler, useRef, useState } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

type Char = { key: string; value: string };

export const CharsList: FC = () => {
  const [chars, setChars] = useState<Char[]>([]);
  const [key, setKey] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const keyInput = useRef<HTMLInputElement | null>(null);
  const valueInput = useRef<HTMLInputElement | null>(null);

  const addChar = () => {
    if (key && value) {
      setChars([...chars, { key, value }]);

      setKey("");
      setValue("");
      if (keyInput.current) keyInput.current.value = "";
      if (valueInput.current) valueInput.current.value = "";
    } else if (key) {
      if (valueInput.current) valueInput.current.focus();
    }
  };

  const removeChar = (index: number) => {
    setChars(() => {
      let updated = chars.filter((_, i: number) => i !== index);

      return updated;
    });
  };

  const handleEnterSubmit: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      if (keyInput.current) keyInput.current.focus();
      addChar();
    }
  };

  return (
    <>
      <div className={styles.list}>
        <div className={styles.item}>
          <span>Назва</span>
          <span>Значення</span>
        </div>
        {chars.map((char, i) => (
          <div className={styles.item}>
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
    </>
  );
};
