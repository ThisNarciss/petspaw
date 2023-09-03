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
import { Pagination } from "@/components/ui/Pagination";

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
  const [page, setPage] = useState(0);

  const onBtnDelClick = async (e: MouseEvent<HTMLButtonElement>) => {
    try {
      setIsLoading(true);
      const { id } = e.currentTarget;
      await CatServices.delUpload(id);
      const data = await CatServices.getUpload();
      if (data.name === "AxiosError") {
        throw new Error(`${data.message}`);
      }
      setGallery(data);
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      Notify.failure(error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = async () => {
    try {
      const data = await CatServices.getUpload();
      if (data.name === "AxiosError") {
        throw new Error(`${data.message}`);
      }
      document.body.style.overflow = "auto";
      setGallery(data);
      setPage(0);
      setIsModalOpen(false);
    } catch (error: any) {
      Notify.failure(error);
    }
  };

  const onBtnToFavClick = async (e: MouseEvent<HTMLButtonElement>) => {
    try {
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
    } catch (error: any) {
      Notify.failure(error);
    }
  };

  const onBtnPrevClick = async () => {
    try {
      if (page === 0) {
        return;
      }
      setIsLoading(true);
      let prevPage = page - 1;
      const data = await CatServices.getUpload(15, prevPage);
      if (data.name === "AxiosError") {
        throw new Error(`${data.message}`);
      }
      setGallery(data);
      setPage((prevState) => prevState - 1);
      setIsLoading(false);
    } catch (error: any) {
      Notify.failure(error);
      setIsLoading(false);
    }
  };
  const onBtnNextClick = async () => {
    try {
      if (gallery.length < 15) {
        return;
      }
      setIsLoading(true);
      let nextPage = page + 1;
      const data = await CatServices.getUpload(15, nextPage);
      if (data.name === "AxiosError") {
        throw new Error(`${data.message}`);
      }
      setGallery(data);
      setPage((prevState) => prevState + 1);
      setIsLoading(false);
    } catch (error: any) {
      Notify.failure(error);
      setIsLoading(false);
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
              onBtnDelClick={onBtnDelClick}
              isDelBtnNeed
            />
          ) : (
            <div className="flex items-center justify-center h-[100vh]">
              <Loader width="200" height="200" />
            </div>
          )}
          <Pagination
            page={page}
            catsLength={gallery.length}
            onBtnNextClick={onBtnNextClick}
            onBtnPrevClick={onBtnPrevClick}
            limit={15}
          />
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
