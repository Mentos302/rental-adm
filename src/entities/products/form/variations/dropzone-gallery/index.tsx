import { FC, memo, useContext, useEffect } from "react";
import Image from "next/image";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { MAX_PHOTO_QUANTITY, VariationContext } from "../model";
import styles from "./styles.module.scss";

type propTypes = {
  images: any;
  update: (type: "images" | "color", payload: string | string[]) => void;
};

export const DropzoneGallery: FC<propTypes> = memo(({ images }) => {
  const { updateVar } = useContext(VariationContext)!;

  images = images.map((img: string | any) =>
    img.dataURL ? img : { dataURL: img }
  );

  const onChange = (imageList: ImageListType) => {
    updateVar("images", imageList as any);
  };

  return (
    <ImageUploading
      multiple
      value={images as any}
      onChange={onChange}
      maxNumber={MAX_PHOTO_QUANTITY}
    >
      {({
        imageList,
        onImageUpload,
        onImageRemoveAll,
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps,
      }) => (
        <div>
          {images && images.length ? (
            <div
              className={styles.preview}
              style={{ height: Math.ceil(images.length / 4) * 200 }}
            >
              {imageList.map((image, index) => {
                return (
                  image && (
                    <div
                      key={index}
                      style={{
                        width: "100%",
                        height: "100%",
                        position: "relative",
                      }}
                    >
                      <Image
                        alt="preview"
                        src={image.dataURL!}
                        layout="fill"
                        objectFit="contain"
                      />
                      <div className={styles.control}>
                        <div className={styles.control__inner}>
                          <button
                            onClick={() => onImageUpdate(index)}
                            type={"button"}
                            className="animated"
                          >
                            <Image
                              src="/icons/edit.svg"
                              alt="edit"
                              width={28}
                              height={28}
                            />
                          </button>
                          <button
                            onClick={() => onImageRemove(index)}
                            type={"button"}
                            className="animated"
                          >
                            <Image
                              src="/icons/delete.svg"
                              alt="delete"
                              width={25}
                              height={25}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                );
              })}
            </div>
          ) : (
            <div className={styles.empty}>
              <button
                style={isDragging ? { color: "red" } : undefined}
                onClick={onImageUpload}
                {...dragProps}
                type={"button"}
                className="animated"
              >
                Перетягніть сюди файл або натисніть для додавання фото
              </button>
            </div>
          )}

          {images && images.length ? (
            <div className={styles.btns}>
              <button
                style={isDragging ? { color: "red" } : undefined}
                onClick={onImageUpload}
                {...dragProps}
                type={"button"}
                className="animated"
              >
                Додати фото
              </button>
              <button
                onClick={onImageRemoveAll}
                type={"button"}
                className="animated"
              >
                Видалити усі фото
              </button>
            </div>
          ) : null}
        </div>
      )}
    </ImageUploading>
  );
});
