import { Dispatch, FC, SetStateAction, useState } from "react";
import { Variation } from "shared/api/@types/product";
import { ColorPicker } from "./colors-picker";
import { DropzoneGallery } from "./dropzone-gallery";

const MAX_VARIATIONS = 6;

type propTypes = {
  vars: Variation[];
  setVars: Dispatch<SetStateAction<Variation[]>>;
};

export const Variations: FC<propTypes> = ({ vars, setVars }) => {
  const [activeVar, setActiveVar] = useState(0);

  const context = { vars, setVars, activeVar, setActiveVar };

  const addVar = () => {
    vars.length < MAX_VARIATIONS &&
      setVars(() => {
        setActiveVar(vars.length);

        return [...vars, { color: "#f3f3f3", images: [] }];
      });
  };

  const removeVar = () => {
    setVars(() => {
      let updated = vars.filter((_, i: number) => i !== activeVar);

      setActiveVar(updated.length - 1);

      return updated;
    });
  };

  const updateImages = (images: string[]) => {
    let items = [...vars];
    let item = items[activeVar];
    item.images = [...images];
    items[activeVar] = item;
    setVars([...items]);
  };

  return (
    <>
      <ColorPicker context={context}>
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
        {vars[activeVar] && (
          <DropzoneGallery
            images={vars[activeVar].images}
            update={updateImages}
          />
        )}
      </div>
    </>
  );
};
