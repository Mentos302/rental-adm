import { FC } from "react";
import Image from "next/image";
import ImageUploading, { ImageListType } from "react-images-uploading";
import styles from "./styles.module.scss";

const MAX_PHOTO_QUANTITY = 8;

type propTypes = {
  images: string[] | undefined;
  update: (images: string[]) => void;
};

export const DropzoneGallery: FC<propTypes> = ({ images, update }) => {
  const onChange = (imageList: ImageListType) => {
    update(imageList as any);
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
              {imageList.map((image, index) => (
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
              ))}
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
};
