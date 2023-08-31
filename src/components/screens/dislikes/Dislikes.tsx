import { BackBtn } from "@/components/ui/BackBtn";
import { CatsGrid } from "@/components/ui/CatsGrid";
import { CollectionNav } from "@/components/ui/CollectionNav";
import { ICat } from "@/ts/interfaces";
import { FC } from "react";

interface IProps {
  dislikedCats: ICat[];
}

export const Dislikes: FC<IProps> = ({ dislikedCats }) => {
  return (
    <CollectionNav>
      <section className=" w-full">
        <div className="dislikes-container">
          <BackBtn title="Dislikes" />
          <CatsGrid catsData={dislikedCats} />
        </div>
      </section>
    </CollectionNav>
  );
};
