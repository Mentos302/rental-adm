import { useState } from "react";
import Image from "next/image";
import ImageUploading, { ImageListType } from "react-images-uploading";
import styles from "./styles.module.scss";

export const DropzoneGallery = () => {
  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };

  return (
    <ImageUploading
      multiple
      value={images}
      onChange={onChange}
      maxNumber={maxNumber}
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
          {images.length ? (
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

          {images.length ? (
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
