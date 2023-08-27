import { BackBtn } from "@/components/ui/BackBtn";
import { CatsGrid } from "@/components/ui/CatsGrid";
import { CollectionNav } from "@/components/ui/CollectionNav";
import { ICat } from "@/ts/interfaces";
import { FC } from "react";

interface IProps {
  likedCats: ICat[];
}

export const Likes: FC<IProps> = ({ likedCats }) => {
  return (
    <CollectionNav>
      <section className=" w-full">
        <div className="p-[20px] bg-[--background-second-color] rounded-[20px] flex flex-col gap-[20px] dark:bg-[--dark-mode-bg]">
          <BackBtn title="Likes" />
          <CatsGrid catsData={likedCats} />
        </div>
      </section>
    </CollectionNav>
  );
};
