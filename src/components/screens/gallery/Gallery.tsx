import React, { useState, FC, MouseEvent } from "react";
import { Notify } from "notiflix";
import { BackBtn } from "@/components/ui/BackBtn";
import { CollectionNav } from "@/components/ui/CollectionNav";
import { Upload } from "@/svg/Upload";
import { Modal } from "@/components/modal/Modal";
import Portal from "@/portal/Portal";
import { CatsGrid } from "@/components/ui/CatsGrid";
import { ICat } from "@/ts/interfaces";
import { CatServices } from "@/services/CatServices";
import { LogItem } from "@/components/log-item/LogItem";
import { DateService } from "@/services/DateService";
import { Loader } from "@/components/loader/Loader";
import { FilterForm } from "@/components/form/FilterForm";

interface IProps {
  breedsList: { value: string; label: string }[];
  uploadGallery: ICat[];
}

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
  const [isLoading, setIsLoading] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = async () => {
    try {
      setIsLoading(true);
      const data = await CatServices.getUpload();
      document.body.style.overflow = "auto";
      setGallery(data);
      setIsModalOpen(false);
      setIsLoading(false);
    } catch (error: any) {
      Notify.failure(error.message);
      setIsLoading(false);
    }
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

  return (
    <CollectionNav>
      <section className={`flex flex-col gap-[10px] w-full `}>
        <div className="gallery-container">
          {isModalOpen && (
            <Portal>
              <Modal closeModal={closeModal} />
            </Portal>
          )}
          <div className="gallery-head-box">
            <BackBtn title="Gallery" />
            <button
              onClick={openModal}
              type="button"
              className="gallery-head-btn"
            >
              <Upload />
              Upload
            </button>
          </div>
          <FilterForm
            setIsLoading={setIsLoading}
            setGallery={setGallery}
            breedsList={breedsList}
          />
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
