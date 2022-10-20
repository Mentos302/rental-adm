import { FC } from "react";
import { DropzoneGallery } from "shared/ui/dropzone-gallery";

export const CreateProductForm: FC = () => {
  return (
    <>
      <form>
        <div className="input_box">
          <span>Назва товару</span>
          <input type="text" name="" id="" />
        </div>
        <div className="input_box">
          <span>Опис</span>
          <textarea rows={5}></textarea>
        </div>
        <div className="input_box">
          <span>Зображення товару</span>
          <DropzoneGallery />
        </div>
      </form>
    </>
  );
};
