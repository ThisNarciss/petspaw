import Image from "next/image";
import { FC, useState, useRef } from "react";
import { BackBtn } from "@/components/ui/BackBtn";
import { IProps } from "@/pages/voting";
import { CatServices } from "@/services/CatServices";
import { Dislike } from "@/svg/Dislike";
import { Favorite } from "@/svg/Favorite";
import { Like } from "@/svg/Like";
import { LogItem } from "@/components/log-item/LogItem";
import { useRouter } from "next/router";
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

  const { pathname } = useRouter();

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
      <section className=" w-full">
        <div className="p-[20px] bg-[#FFFFFF] rounded-[20px] flex flex-col gap-[20px]">
          <BackBtn title="Voting" />
          <div className="relative mb-[52px]">
            <div className="flex items-center justify-center rounded-[20px] w-full h-[360px] overflow-hidden">
              <Image
                className="rounded-[20px] object-center  object-cover w-full h-full"
                id={catsData[0].id}
                src={catsData[0].url}
                sizes="100vw"
                alt="cat picture"
                width={640}
                height={360}
              />
              <ul className="flex absolute bottom-[-45px] gap-[4px] border-[4px] border-[#FFFFFF] border-solid bg-[#FFFFFF] rounded-[20px]">
                <li>
                  <button
                    onClick={onBtnClickUpVote}
                    className="p-[25px] bg-[#97EAB9] text-[#FFFFFF] rounded-l-[20px] fill-current  hover:bg-[#97eaba5a] hover:text-[#97EAB9]"
                  >
                    <Like />
                  </button>
                </li>
                <li>
                  <button
                    onClick={onBtnClickToFavorite}
                    className={`p-[25px] bg-[#FF868E] text-[#FFFFFF] fill-current  hover:bg-[#ff868e5a] hover:text-[#FF868E]`}
                  >
                    {isFavorite ? <FavoriteFill /> : <Favorite />}
                  </button>
                </li>
                <li>
                  <button
                    onClick={onBtnClickDownVote}
                    className="p-[25px] bg-[#FFD280] text-[#FFFFFF] fill-current rounded-r-[20px] hover:bg-[#ffd3805a] hover:text-[#FFD280]"
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
