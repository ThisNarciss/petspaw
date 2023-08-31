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
        <div className="likes-container">
          <BackBtn title="Likes" />
          <CatsGrid catsData={likedCats} />
        </div>
      </section>
    </CollectionNav>
  );
};
