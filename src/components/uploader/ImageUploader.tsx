import { UploadBG } from "@/svg/UploadBg";
import Image from "next/image";
import { useState, DragEvent, ChangeEvent, FC, useRef } from "react";

interface ImageUploaderProps {
  onImageUpload: (image: FormData, name: string, imageUrl: string) => void;
  url: string;
  sendCatData: { order: string; type: string; breed: string };
}

const ImageUploader: FC<ImageUploaderProps> = ({
  onImageUpload,
  url,
  sendCatData,
}) => {
  const [highlight, setHighlight] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setHighlight(true);
  };

  const handleDragLeave = () => {
    setHighlight(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setHighlight(false);

    const file = e.dataTransfer.files[0];

    if (file.type.startsWith("image/jp") || file.type.startsWith("image/png")) {
      handleImage(file);
    } else {
      alert("upload a .jpg or .png cat Image");
    }
  };

  const handleImageSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleImage(file);
    }
  };

  const handleImage = (file: File) => {
    const reader = new FileReader();
    const formData = new FormData();
    formData.append("file", file, JSON.stringify(sendCatData));

    if (file.type.startsWith("image/jp") || file.type.startsWith("image/png")) {
      reader.onload = (e) => {
        onImageUpload(
          formData as FormData,
          file.name,
          e.target?.result as string
        );
      };

      reader.readAsDataURL(file);
    } else {
      alert("upload a .jpg or .png cat Image");
    }
  };

  return (
    <div
      className={`relative border-[2px] border-[#FBE0DC] dark:border-[--dark-mode-second-bg] border-dashed rounded-[20px] flex justify-center items-center cursor-pointer bg-[--background-second-color] w-full h-[320px] mb-[20px] dark:bg-[--dark-mode-drop-bg] ${
        highlight ? "border-[#007bff]" : ""
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleImageSelect}
    >
      {!url && (
        <>
          <div className="absolute  fill-current text-[--background-color] dark:text-[--dark-mode-drop-bg]">
            <UploadBG />
          </div>

          <p className="relative z-[9]">
            {" "}
            <span className="text-[--foreground-second-color] dark:text-[#FFFFFF]">
              Drag here
            </span>{" "}
            your file or{" "}
            <span className="text-[--foreground-second-color] dark:text-[#FFFFFF]">
              Click here
            </span>{" "}
            to upload
          </p>
        </>
      )}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileInputChange}
        style={{ display: "none" }}
      />
      {url && (
        <Image
          className="max-h-[280px] max-w-[558px] object-cover rounded-[10px]"
          src={url}
          alt="downloading cat picture"
          width={558}
          height={280}
        />
      )}
    </div>
  );
};

export default ImageUploader;
