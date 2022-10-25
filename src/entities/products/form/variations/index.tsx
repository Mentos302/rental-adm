import { FC, memo, useContext, useState } from "react";
import { ProductFormContext } from "../model";
import { MAX_VARIATIONS, VariationContext } from "./model";
import { ColorPicker } from "./colors-picker";
import { DropzoneGallery } from "./dropzone-gallery";
import { Variation } from "shared/api/@types/product";

type propTypes = { vars: Variation[] };

export const Variations: FC<propTypes> = memo(({ vars }) => {
  const { dispatch, editHandler } = useContext(ProductFormContext)!;
  const [activeVar, setActiveVar] = useState(0);

  const addVar = () => {
    if (vars.length < MAX_VARIATIONS) {
      dispatch({
        type: "ADD_VARIATION",
        payload: { color: "#f3f3f3", images: [] },
      });

      setActiveVar(vars.length);

      editHandler();
    }
  };

  const removeVar = () => {
    dispatch({
      type: "REMOVE_VARIATION",
      payload: activeVar,
    });

    setActiveVar(vars.length - 2);

    editHandler();
  };

  const updateVar = (type: "images" | "color", payload: string | string[]) => {
    let items = [...vars];
    let item = items[activeVar];
    item[type] = payload as any;
    items[activeVar] = item;

    dispatch({
      type: "UPDATE_VARIATION",
      payload: items,
    });

    editHandler();
  };

  return (
    <VariationContext.Provider
      value={{ vars, activeVar, setActiveVar, updateVar }}
    >
      <ColorPicker>
        <>
          <button type="button" onClick={addVar}>
            додати
          </button>
          <button type="button" onClick={removeVar}>
            видалити
          </button>
        </>
        <>
          Цей товар доступний в єдиній варіації, натисніть, щоб
          <button type="button" onClick={addVar}>
            додати варіацію
          </button>
        </>
      </ColorPicker>
      <div className="input_box">
        <span>Зображення</span>
        <DropzoneGallery images={vars[activeVar].images} update={updateVar} />
      </div>
    </VariationContext.Provider>
  );
});
