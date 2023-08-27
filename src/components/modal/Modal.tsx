import React, { useState, FC, FormEvent } from "react";
import ImageUploader from "../uploader/ImageUploader";
import { CatServices } from "@/services/CatServices";
import { LogItem } from "../log-item/LogItem";

import { Jost } from "next/font/google";
import { Cross } from "@/svg/Cross";

const jost = Jost({ subsets: ["latin"], weight: ["400", "500"] });

interface IProps {
  closeModal: () => void;
  sendData: { order: string; type: string; breed: string };
}

interface IListItem {
  text: number;
}

export const Modal: FC<IProps> = ({ closeModal, sendData }) => {
  const [uploadImg, setUploadImg] = useState<FormData>();
  const [listItems, setListItems] = useState<IListItem[]>([]);
  const [catsData, setCatsData] = useState(sendData);
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");

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
      if (uploadImg !== undefined) {
        const data = await CatServices.uploadImage(uploadImg);
        setListItems((prevState) => [
          ...prevState,
          {
            text: data.approved,
          },
        ]);
        setUrl("");
      }
    } catch (error) {}
  };

  return (
    <div
      className={`fixed flex items-center justify-end top-0 left-0 w-[100vw] h-[100vh] p-[30px] bg-[--backdrop] ${jost.className}`}
    >
      <div className="relative h-full w-[680px] px-[20px] text-center bg-[--background-color] dark:bg-[#282828] rounded-[20px] py-[100px]">
        <button
          className="absolute p-[11px] text-[#FF868E] top-6 right-6 fill-current bg-[#FFFFFF] rounded-[10px] hover:text-[#FFFFFF] hover:bg-[#FF868E] dark:bg-[--dark-mode-drop-bg] dark:hover:bg-[#FF868E]"
          onClick={closeModal}
        >
          <Cross />
        </button>
        <h2 className="text-center text-[36px] text-[--foreground-second-color] font-medium mb-[10px] dark:text-[#FFFFFF]">
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
          <ImageUploader
            onImageUpload={handleImageUpload}
            url={url}
            sendCatData={catsData}
          />
          {!url && <p className="">No file selected</p>}
          {url && (
            <div>
              <p className="mb-[20px]">Image File Name: {name}</p>
              <button className="uppercase bg-[#FF868E] text-[--background-second-color] text-[12px] font-medium px-[30px] py-[12px] rounded-[10px] leading-4 tracking-[2px]">
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
