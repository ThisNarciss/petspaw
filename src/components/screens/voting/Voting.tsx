import Image from "next/image";
import { FC, useState } from "react";
import { BackBtn } from "@/components/ui/BackBtn";
import { IProps } from "@/pages/voting";
import { CatServices } from "@/services/CatServices";
import { Dislike } from "@/svg/Dislike";
import { Favorite } from "@/svg/Favorite";
import { Like } from "@/svg/Like";
import { LogItem } from "@/components/log-item/LogItem";
import { DateService } from "@/services/DateService";
import { FavoriteFill } from "@/svg/FavoriteFill";
import { CollectionNav } from "@/components/ui/CollectionNav";

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

export const Voting: FC<IProps> = ({ cats }) => {
  const [catsData, setCatsData] = useState(cats);
  const [listItems, setListItems] = useState<IListItem[]>([]);
  const [isFavorite, setIsFavorite] = useState(false);

  const onBtnClickUpVote = async () => {
    const { hour, min } = DateService.getCurrentTime();
    await CatServices.catVotes(catsData[0].id, 1);
    const updateData = await CatServices.getCat();
    setCatsData(updateData);
    setIsFavorite(false);
    setListItems((prevState) => [
      ...prevState,
      {
        id: catsData[0].id,
        time: `${hour}:${min}`,
        text: "added to Likes",
      },
    ]);
  };
  const onBtnClickDownVote = async () => {
    const { hour, min } = DateService.getCurrentTime();
    await CatServices.catVotes(catsData[0].id, -1);
    const updateData = await CatServices.getCat();
    setCatsData(updateData);
    setIsFavorite(false);
    setListItems((prevState) => [
      ...prevState,
      {
        id: catsData[0].id,
        time: `${hour}:${min}`,
        text: "added to Dislikes",
      },
    ]);
  };

  const onBtnClickToFavorite = async () => {
    const { hour, min } = DateService.getCurrentTime();
    const favorite = await CatServices.getFavorite();

    const findFavCat: IFavCat = favorite.find(
      (cat: IFavCat) => cat.image_id === catsData[0].id
    );

    if (!findFavCat) {
      await CatServices.addToFavorite(catsData[0].id);
      setListItems((prevState) => [
        ...prevState,
        {
          id: catsData[0].id,
          time: `${hour}:${min}`,
          text: "added to Favorites",
        },
      ]);
      setIsFavorite(true);
    } else {
      await CatServices.delFromFavorite(findFavCat.id);
      setListItems((prevState) => [
        ...prevState,
        {
          id: catsData[0].id,
          time: `${hour}:${min}`,
          text: "removed from Favorites",
        },
      ]);
      setIsFavorite(false);
    }
  };

  return (
    <CollectionNav>
      <section className=" lg:w-full md">
        <div className="voting-container">
          <BackBtn title="Voting" />
          <div className="relative mb-[52px]">
            <div className="voting-img-box">
              <Image
                className="voting-img"
                id={catsData[0].id}
                src={catsData[0].url}
                sizes="100vw"
                alt="cat picture"
                width={640}
                height={360}
              />
              <ul className="voting-list">
                <li>
                  <button
                    type="button"
                    onClick={onBtnClickUpVote}
                    className="voting-list-like-btn"
                  >
                    <Like />
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={onBtnClickToFavorite}
                    className={`voting-list-fav-btn`}
                  >
                    {isFavorite ? <FavoriteFill /> : <Favorite />}
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={onBtnClickDownVote}
                    className="voting-list-dis-btn"
                  >
                    <Dislike />
                  </button>
                </li>
              </ul>
            </div>
          </div>
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
