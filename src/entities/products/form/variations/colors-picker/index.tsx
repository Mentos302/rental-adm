import { FC, ReactNode, useContext, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { VariationContext } from "../model";
import { Variation } from "shared/api/@types/product";
import styles from "./styles.module.scss";

type propTypes = {
  children: ReactNode[];
};

export const ColorPicker: FC<propTypes> = ({ children }) => {
  const { vars, activeVar, setActiveVar, updateVar } =
    useContext(VariationContext)!;
  const [choosingColor, setChoosingColor] = useState<string>("");
  const [pickerIndex, setPickerIndex] = useState<number | null>(null);

  const openPicker = (i: number) => {
    if (activeVar === i && pickerIndex !== i) {
      setChoosingColor(vars[activeVar].color);

      setPickerIndex(i);
    }
  };

  return (
    <div className={styles.root}>
      {vars.length > 1 ? (
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <span className={styles.available}>Доступні варіації:</span>
            <div className={styles.list}>
              {vars.map((vari: Variation, i: number) => (
                <div
                  key={i}
                  className={activeVar === i ? styles.active : ""}
                  onClick={() => openPicker(i)}
                >
                  {pickerIndex === i ? (
                    <div className={styles.picker}>
                      <HexColorPicker
                        color={choosingColor}
                        onChange={(color) => updateVar("color", color)}
                      />
                    </div>
                  ) : null}
                  <button
                    type="button"
                    className={styles.variation}
                    style={{ background: vari.color }}
                    onClick={() => {
                      setPickerIndex(null);
                      setActiveVar(i);
                    }}
                  ></button>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.control}>{children[0]}</div>
        </div>
      ) : (
        <span className={styles.single}>{children[1]}</span>
      )}
    </div>
  );
};
