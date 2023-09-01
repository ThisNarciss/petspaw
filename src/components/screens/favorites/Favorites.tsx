import { useState, FC } from "react";
import { BackBtn } from "@/components/ui/BackBtn";
import { CollectionNav } from "@/components/ui/CollectionNav";
import { LogItem } from "@/components/log-item/LogItem";
import { DateService } from "@/services/DateService";
import { MouseEvent } from "react";
import { CatServices } from "@/services/CatServices";
import { CatsGrid } from "@/components/ui/CatsGrid";
import { Pagination } from "@/components/ui/Pagination";
import { Notify } from "notiflix";
import { Loader } from "@/components/loader/Loader";

interface IFavItem {
  id: number;
  value?: number;
  image: { id: string; url: string };
  user_id?: string;
  image_id?: string;
}

interface IListItem {
  id: string;
  time: string;
  text: string;
}

interface IProps {
  favourite: IFavItem[];
}

export const Favorites: FC<IProps> = ({ favourite }) => {
  const [fav, setFav] = useState(favourite);
  const [listItems, setListItems] = useState<IListItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);

  const onBtnFavClick = async (e: MouseEvent<HTMLButtonElement>) => {
    const id = Number(e.currentTarget.id);

    await CatServices.delFromFavorite(id);
    const data = await CatServices.getFavorite(15);
    setFav(data);

    const { hour, min } = DateService.getCurrentTime();
    setListItems((prevState) => [
      ...prevState,
      {
        id: id.toString(),
        time: `${hour}:${min}`,
        text: "removed from Favorites",
      },
    ]);
  };

  const onBtnPrevClick = async () => {
    try {
      if (page === 0) {
        return;
      }
      setIsLoading(true);
      let prevPage = page - 1;
      const data = await CatServices.getFavorite(15, prevPage);
      if (data.name === "AxiosError") {
        throw new Error(`${data.message}`);
      }
      setFav(data);
      setPage((prevState) => prevState - 1);
      setIsLoading(false);
    } catch (error: any) {
      Notify.failure(error);
      setIsLoading(false);
    }
  };
  const onBtnNextClick = async () => {
    try {
      if (fav.length < 15) {
        return;
      }
      setIsLoading(true);
      let nextPage = page + 1;
      const data = await CatServices.getFavorite(15, nextPage);
      if (data.name === "AxiosError") {
        throw new Error(`${data.message}`);
      }
      setFav(data);
      setPage((prevState) => prevState + 1);
      setIsLoading(false);
    } catch (error: any) {
      Notify.failure(error);
      setIsLoading(false);
    }
  };

  return (
    <CollectionNav>
      <section className=" w-full">
        <div className="favorites-container">
          <BackBtn title="Favorites" />

          {!isLoading ? (
            <CatsGrid catsData={fav} onClick={onBtnFavClick} isDelBtnNeed />
          ) : (
            <div className="flex items-center justify-center h-[100vh]">
              <Loader width="200" height="200" />
            </div>
          )}
          <Pagination
            page={page}
            catsLength={fav.length}
            onBtnNextClick={onBtnNextClick}
            onBtnPrevClick={onBtnPrevClick}
            limit={15}
          />
          {Boolean(listItems.length) && (
            <ul className="favorites-log-list">
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
