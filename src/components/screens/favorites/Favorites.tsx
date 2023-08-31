import { useState, FC } from "react";
import { BackBtn } from "@/components/ui/BackBtn";
import { CollectionNav } from "@/components/ui/CollectionNav";
import { LogItem } from "@/components/log-item/LogItem";
import { DateService } from "@/services/DateService";
import { MouseEvent } from "react";
import { CatServices } from "@/services/CatServices";
import { CatsGrid } from "@/components/ui/CatsGrid";

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

  const onBtnFavClick = async (e: MouseEvent<HTMLButtonElement>) => {
    const id = Number(e.currentTarget.id);

    await CatServices.delFromFavorite(id);
    const data = await CatServices.getFavorite("?limit=15");
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

  return (
    <CollectionNav>
      <section className=" w-full">
        <div className="favorites-container">
          <BackBtn title="Favorites" />
          <CatsGrid catsData={fav} onClick={onBtnFavClick} isDelBtnNeed />

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
