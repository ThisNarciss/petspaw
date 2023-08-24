import Image from "next/image";
import Link from "next/link";
import { FC, useState, useRef, JSXElementConstructor } from "react";
import { SearchForm } from "@/components/form/SearchForm";
import { BackBtn } from "@/components/ui/BackBtn";
import { IProps } from "@/pages/voting";
import { CatServices } from "@/services/CatServices";
import { Dislike } from "@/svg/Dislike";
import { Favorite } from "@/svg/Favorite";
import { Like } from "@/svg/Like";
import { LogItem } from "@/components/log-item/LogItem";

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
  const actionLogList = useRef<HTMLUListElement | null>(null);
  const [listItems, setListItems] = useState<IListItem[]>([]);

  const onBtnClickUpVote = async () => {
    const date = new Date();

    await CatServices.catVotes(catsData[0].id, 1);
    const updateData = await CatServices.getCats();
    setCatsData(updateData);
    setListItems((prevState) => [
      ...prevState,
      {
        id: catsData[0].id,
        time: `${date.getHours()}:${date.getMinutes()}`,
        text: "added to Likes",
      },
    ]);
  };
  const onBtnClickDownVote = async () => {
    const date = new Date();
    await CatServices.catVotes(catsData[0].id, -1);
    const updateData = await CatServices.getCats();
    setCatsData(updateData);
    setListItems((prevState) => [
      ...prevState,
      {
        id: catsData[0].id,
        time: `${date.getHours()}:${date.getMinutes()}`,
        text: "added to Dislikes",
      },
    ]);
  };

  const onBtnClickToFavorite = async () => {
    const date = new Date();
    const favorite = await CatServices.getFavorite();
    const findFavCat: IFavCat = favorite.find(
      (cat: IFavCat) => cat.image_id === catsData[0].id
    );
    console.log(findFavCat);

    if (!findFavCat) {
      await CatServices.addToFavorite(catsData[0].id);
      setListItems((prevState) => [
        ...prevState,
        {
          id: catsData[0].id,
          time: `${date.getHours()}:${date.getMinutes()}`,
          text: "added to Favorites",
        },
      ]);
    } else {
      await CatServices.delFromFavorite(findFavCat.id);
      setListItems((prevState) => [
        ...prevState,
        {
          id: catsData[0].id,
          time: `${date.getHours()}:${date.getMinutes()}`,
          text: "removed from Favorites",
        },
      ]);
    }
  };

  return (
    <section className="flex flex-col gap-[10px] w-full">
      <div className="flex items-center justify-between gap-[10px]">
        <SearchForm />
        <Link
          className="p-[15px] rounded-[20px] bg-[#FFFFFF] hover:bg-[#FBE0DC]"
          href="/likes"
        >
          <Like />
        </Link>
        <Link
          className="p-[15px] rounded-[20px] bg-[#FFFFFF] hover:bg-[#FBE0DC]"
          href="/favorites"
        >
          <Favorite />
        </Link>
        <Link
          className="p-[15px] rounded-[20px] bg-[#FFFFFF] hover:bg-[#FBE0DC]"
          href="/dislikes"
        >
          <Dislike />
        </Link>
      </div>
      <div className="p-[20px] bg-[#FFFFFF] rounded-[20px] flex flex-col gap-[20px]">
        <BackBtn title="Voting" />
        <div className="relative mb-[52px]">
          <div className="flex items-center justify-center rounded-[20px] w-full h-[360px] overflow-hidden items-center ">
            <Image
              className="w-full object-center max-h-[640px]"
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
                  className="p-[25px] bg-[#97EAB9] rounded-l-[20px]"
                >
                  <Like color="#FFFFFF" />
                </button>
              </li>
              <li>
                <button
                  onClick={onBtnClickToFavorite}
                  className="p-[25px] bg-[#FF868E]"
                >
                  <Favorite color="#FFFFFF" />
                </button>
              </li>
              <li>
                <button
                  onClick={onBtnClickDownVote}
                  className="p-[25px] bg-[#FFD280] rounded-r-[20px]"
                >
                  <Dislike color="#FFFFFF" />
                </button>
              </li>
            </ul>
          </div>
        </div>
        {Boolean(listItems.length) && (
          <ul ref={actionLogList}>
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
  );
};
