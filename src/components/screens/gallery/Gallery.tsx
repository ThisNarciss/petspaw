import Select from "react-select";
import React, { useState, FC, MouseEvent } from "react";
import { BackBtn } from "@/components/ui/BackBtn";
import { CollectionNav } from "@/components/ui/CollectionNav";
import { Upload } from "@/svg/Upload";
import { Reload } from "@/svg/Reload";
import { Modal } from "@/components/modal/Modal";
import Portal from "@/portal/Portal";
import { CatsGrid } from "@/components/ui/CatsGrid";
import { ICat } from "@/ts/interfaces";
import { styledSelect } from "@/utils/styledSelect";
import { CatServices } from "@/services/CatServices";
import { LogItem } from "@/components/log-item/LogItem";
import { DateService } from "@/services/DateService";
import { SubmitHandler, useForm } from "react-hook-form";
import { Loader } from "@/components/loader/Loader";

interface IProps {
  breedsList: { value: string; label: string }[];
  uploadGallery: ICat[];
}

const limitOptions = [
  { value: "5", label: "5 items per page" },
  { value: "10", label: "10 items per page" },
  { value: "15", label: "15 items per page" },
  { value: "20", label: "20 items per page" },
];

const orderOptions = [
  { value: "RANDOME", label: "Random" },
  { value: "DESC", label: "Desc" },
  { value: "ASC", label: "Asc" },
];
const typeOptions = [
  { value: "jpg,gif,png", label: "All" },
  { value: "jpg,png", label: "Static" },
  { value: "gif", label: "Animated" },
];

interface IFavCat {
  id: number;
  user_id: string;
  created_at: string;
  image_id: string;
}

interface IListItem {
  id: string;
  time: string;
  text: string;
}

type Inputs = {
  order: string;
  type: string;
  breed: string;
  limit: string;
};

export const Gallery: FC<IProps> = ({ uploadGallery, breedsList }) => {
  const [listItems, setListItems] = useState<IListItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gallery, setGallery] = useState(uploadGallery);
  const [sendOrderData, setSendOrderData] = useState("");
  const [sendTypeData, setSendTypeData] = useState("");
  const [sendBreedData, setSendBreedData] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      setIsLoading(true);
      const result = await CatServices.getGalleryCat(data);

      setGallery(result);
      setIsLoading(false);
      reset();
    } catch (error) {
      setIsLoading(false);
      reset();
    }
  };

  const selectAllStyles = styledSelect({
    width: "290px",
    color: "#1D1D1D",
    bgColor: "#FFFFFF",
    borderColor: "#FFFFFF",
  });
  const selectLimitStyles = styledSelect({
    width: "240px",
    color: "#1D1D1D",
    bgColor: "#FFFFFF",
    borderColor: "#FFFFFF",
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = async () => {
    try {
      const data = await CatServices.getUpload();
      setGallery(data);
      setIsModalOpen(false);
    } catch (error) {}
  };

  const onBtnToFavClick = async (e: MouseEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget;
    const { hour, min } = DateService.getCurrentTime();
    const favorite = await CatServices.getFavorite();

    const findFavCat: IFavCat = favorite.find(
      (cat: IFavCat) => cat.image_id === id
    );

    if (!findFavCat) {
      await CatServices.addToFavorite(id);
      setListItems((prevState) => [
        ...prevState,
        {
          id,
          time: `${hour}:${min}`,
          text: "added to Favorites",
        },
      ]);
    } else {
      await CatServices.delFromFavorite(findFavCat.id);
      setListItems((prevState) => [
        ...prevState,
        {
          id,
          time: `${hour}:${min}`,
          text: "removed from Favorites",
        },
      ]);
    }
  };

  const handleOrderSelectChange = (selectedOptions: any) => {
    setSendOrderData(selectedOptions.value);
    setValue("order", selectedOptions.value);
  };
  const handleTypeSelectChange = (selectedOptions: any) => {
    setSendTypeData(selectedOptions.value);
    setValue("type", selectedOptions.value);
  };
  const handleBreedSelectChange = (selectedOptions: any) => {
    setSendBreedData(selectedOptions.value);
    setValue("breed", selectedOptions.value);
  };
  const handleLimitSelectChange = (selectedOptions: any) => {
    setValue("limit", selectedOptions.value);
  };

  return (
    <CollectionNav>
      <section className="flex flex-col gap-[10px] w-full">
        <div className="p-[20px] dark:bg-[--dark-mode-bg] bg-[--background-second-color] rounded-[20px]">
          {isModalOpen && (
            <Portal>
              <Modal
                closeModal={closeModal}
                sendData={{
                  order: sendOrderData,
                  type: sendTypeData,
                  breed: sendBreedData,
                }}
              />
            </Portal>
          )}
          <div className="flex items-center justify-between mb-[20px]">
            <BackBtn title="Gallery" />
            <button
              onClick={openModal}
              type="button"
              className="px-[30px] flex items-center gap-[10px] py-[12px] bg-[#FBE0DC] rounded-[10px] uppercase text-[#FF868E] fill-current dark:hover:text-[#FFFFFF] dark:bg-[--dark-mode-second-bg] dark:hover:bg-[#FF868E] text-[12px] font-medium leading-4 tracking-[2px] hover:text-[--background-second-color] hover:bg-[#FF868E]"
            >
              <Upload />
              Upload
            </button>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex items-center flex-wrap max-w-[640px] rounded-[20px] bg-[#F8F8F7] dark:bg-[--dark-mode-bg] p-[20px] gap-[20px] mb-[20px]"
          >
            <label className="text-[10px] uppercase">
              <span className="ml-[10px] leading-[1.8]">Order</span>
              <Select
                defaultValue={orderOptions[0]}
                options={orderOptions}
                styles={selectAllStyles}
                {...register("order")}
                onChange={handleOrderSelectChange}
              />
            </label>
            <label className="text-[10px] uppercase">
              <span className="ml-[10px] leading-[1.8]">Type</span>
              <Select
                defaultValue={typeOptions[1]}
                options={typeOptions}
                styles={selectAllStyles}
                {...register("type")}
                onChange={handleTypeSelectChange}
              />
            </label>
            <label className="text-[10px] uppercase">
              <span className="ml-[10px] leading-[1.8]">Breed</span>
              <Select
                defaultValue={breedsList[0]}
                options={breedsList}
                styles={selectAllStyles}
                {...register("breed")}
                onChange={handleBreedSelectChange}
              />
            </label>

            <div className="flex items-end justify-between gap-[10px]">
              <label className="text-[10px] uppercase text-[#8C8C8C] dark:text-[#FFFFFF]">
                <span className="ml-[10px] leading-[1.8]">Limit</span>
                <Select
                  defaultValue={limitOptions[1]}
                  options={limitOptions}
                  styles={selectLimitStyles}
                  {...register("limit")}
                  onChange={handleLimitSelectChange}
                />
              </label>

              <button className="fill-current bg-[--background-second-color] text-[#FF868E] p-[10px] rounded-[10px] hover:text-[--background-second-color] hover:bg-[#FF868E] focus:text-[--background-second-color] focus:bg-[#FF868E] dark:bg-[--foreground-second-color] dark:hover:bg-[#FF868E]">
                <Reload />
              </button>
            </div>
          </form>
          {!isLoading ? (
            <CatsGrid
              catsData={gallery}
              onClick={onBtnToFavClick}
              isDelBtnNeed
            />
          ) : (
            <div className="flex items-center justify-center h-[100vh]">
              <Loader width="200" height="200" />
            </div>
          )}
          {Boolean(listItems.length) && (
            <ul className="flex flex-col gap-[10px]">
              {listItems.map((item, idx) => {
                return (
                  <LogItem
                    key={idx}
                    time={item.time}
                    id={item.id}
                    text={item.text}
                  />
                );
              })}
            </ul>
          )}
        </div>
      </section>
    </CollectionNav>
  );
};
