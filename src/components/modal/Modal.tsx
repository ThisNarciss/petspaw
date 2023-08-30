import React, { useState, FC, FormEvent } from "react";
import { Notify } from "notiflix";
import ImageUploader from "../uploader/ImageUploader";
import { CatServices } from "@/services/CatServices";
import { LogItem } from "../log-item/LogItem";

import { Jost } from "next/font/google";
import { Cross } from "@/svg/Cross";
import { Loader } from "../loader/Loader";

const jost = Jost({ subsets: ["latin"], weight: ["400", "500"] });

interface IProps {
  closeModal: () => void;
}

interface IListItem {
  text: number;
}

export const Modal: FC<IProps> = ({ closeModal }) => {
  const [uploadImg, setUploadImg] = useState<FormData>();
  const [listItems, setListItems] = useState<IListItem[]>([]);
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleImageUpload = (
    image: FormData,
    fileName: string,
    imageUrl: string
  ) => {
    setUrl(imageUrl);
    setUploadImg(image);
    setName(fileName);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      if (uploadImg !== undefined) {
        const data = await CatServices.uploadImage(uploadImg);
        setListItems((prevState) => [
          ...prevState,
          {
            text: data.approved,
          },
        ]);
        setUrl("");
        setIsLoading(false);
      }
    } catch (error: any) {
      Notify.failure(error.message);
      setIsLoading(false);
    }
  };

  return (
    <div className={`modal-backdrop ${jost.className}`}>
      <div className="modal-box">
        <button className="modal-close-btn" onClick={closeModal}>
          <Cross />
        </button>
        <h2 className="text-center md:text-[36px] text-[--foreground-second-color] font-medium mb-[10px] dark:text-[#FFFFFF]">
          Upload a .jpg or .png Cat Image
        </h2>
        <p className="mb-[40px]">
          Any uploads must comply with the{" "}
          <a className="text-[#FF868E]" href="https://thecatapi.com/privacy">
            upload guidelines
          </a>{" "}
          upload guidelines
        </p>
        <form className="mb-[20px]" onSubmit={handleSubmit}>
          <ImageUploader onImageUpload={handleImageUpload} url={url} />
          {!url && <p className="">No file selected</p>}
          {url && (
            <div className="flex flex-col items-center">
              <p className="mb-[20px] w-full overflow-hidden">
                Image File Name:
                <br /> {name}
              </p>
              <button className="modal-form-btn">
                {isLoading && <Loader width="16" height="16" />}
                Upload Photo
              </button>
            </div>
          )}
        </form>
        {Boolean(listItems.length) && (
          <ul className="flex flex-col gap-[10px]">
            {listItems.map((item, idx) => {
              return <LogItem key={idx} text={item.text} />;
            })}
          </ul>
        )}
      </div>
    </div>
  );
};
