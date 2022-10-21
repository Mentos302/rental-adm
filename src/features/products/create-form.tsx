import { FC } from "react";
import Select from "react-select";
import { DropzoneGallery } from "shared/ui/dropzone-gallery";
import CATEGORIES from "shared/mocks/categories";
import { ColorPicker } from "shared/ui/colors-picker";
import { CharsList } from "shared/ui/chars-list";
import styles from "./styles.module.scss";

export const CreateProductForm: FC = () => {
  return (
    <>
      <form>
        <div className="input_box">
          <span>Назва</span>
          <input type="text" name="" id="" />
        </div>
        <div className="input_box">
          <span>Опис</span>
          <textarea rows={5}></textarea>
        </div>
        <ColorPicker />
        <div className="input_box">
          <span>Зображення</span>
          <DropzoneGallery />
        </div>
        <div className="input_box">
          <span>Характеристики</span>
          <CharsList />
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
          <input type="number" min={0} />
        </div>
      </form>
    </>
  );
};
