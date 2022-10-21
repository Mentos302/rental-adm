import { FC, useState } from "react";
import { HexColorPicker } from "react-colorful";
import styles from "./styles.module.scss";

const MAX_VARIATIONS = 6;

export const ColorPicker: FC = () => {
  const [colours, setColours] = useState<string[]>([]);
  const [active, setActive] = useState(colours.length ? 0 : null);
  const [choosingColor, setChoosingColor] = useState<string>("");
  const [pickerIndex, setPickerIndex] = useState<number | null>(null);

  const addColour = () => {
    setPickerIndex(null);

    colours.length < MAX_VARIATIONS &&
      setColours(() => {
        if (colours.length) {
          setActive(colours.length);

          return [...colours, "#f3f3f3"];
        } else {
          setActive(0);

          return ["#309aff", "#fed602"];
        }
      });
  };

  const removeColour = () => {
    setColours(() => {
      let updated = colours.filter((color: string, i: number) => i !== active);

      setPickerIndex(null);
      setActive(updated.length - 1);

      return updated;
    });
  };

  const openPicker = (i: number) => {
    if (active === i && pickerIndex !== i) {
      setChoosingColor(colours[active]);

      setPickerIndex(i);
    }
  };

  const onChangeHandler = (color: string, i: number) => {
    let items = [...colours];
    let item = items[i];
    item = color;
    items[i] = item;
    setColours(items);
  };

  return (
    <div className={styles.root}>
      {colours.length > 1 ? (
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <span className={styles.available}>Доступні варіації:</span>
            <div className={styles.list}>
              {colours.map((background: string, i: number) => (
                <div
                  className={active === i ? styles.active : ""}
                  onClick={() => openPicker(i)}
                >
                  {pickerIndex === i ? (
                    <div className={styles.picker}>
                      <HexColorPicker
                        color={choosingColor}
                        onChange={(color) => onChangeHandler(color, i)}
                      />
                    </div>
                  ) : null}

                  <button
                    type="button"
                    className={styles.variation}
                    style={{ background }}
                    onClick={() => {
                      setPickerIndex(null);
                      setActive(i);
                    }}
                  ></button>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.control}>
            <button type="button" onClick={addColour}>
              додати
            </button>
            <button type="button" onClick={removeColour}>
              видалити
            </button>
          </div>
        </div>
      ) : (
        <span className={styles.single}>
          Цей товар доступний в єдиній варіації, натисніть, щоб
          <button type="button" onClick={addColour}>
            додати варіацію
          </button>
        </span>
      )}
    </div>
  );
};
