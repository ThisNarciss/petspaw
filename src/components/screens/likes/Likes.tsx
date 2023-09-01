import { Loader } from "@/components/loader/Loader";
import { BackBtn } from "@/components/ui/BackBtn";
import { CatsGrid } from "@/components/ui/CatsGrid";
import { CollectionNav } from "@/components/ui/CollectionNav";
import { Pagination } from "@/components/ui/Pagination";
import { CatServices } from "@/services/CatServices";
import { ICat } from "@/ts/interfaces";
import { Notify } from "notiflix";
import { FC, useState } from "react";

interface IProps {
  likedCats: ICat[];
}

export const Likes: FC<IProps> = ({ likedCats }) => {
  const [cats, setCats] = useState(likedCats);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(15);

  const onBtnPrevClick = async () => {
    try {
      if (page === 0) {
        return;
      }
      setIsLoading(true);
      let prevPage = page - 15;
      let prevLimit = limit - 15;
      const data = await CatServices.getVotes(1, prevLimit, prevPage);
      setCats(data);
      setPage((prevState) => prevState - 15);
      setLimit((prevState) => prevState - 15);
      setIsLoading(false);
    } catch (error: any) {
      Notify.failure(error.message);
      setIsLoading(false);
    }
  };

  const onBtnNextClick = async () => {
    try {
      if (cats.length < 15) {
        return;
      }
      setIsLoading(true);
      let nextPage = page + 15;
      let nextLimit = limit + 15;
      const data = await CatServices.getVotes(1, nextLimit, nextPage);
      setCats(data);
      setPage((prevState) => prevState + 15);
      setLimit((prevState) => prevState + 15);
      setIsLoading(false);
    } catch (error: any) {
      Notify.failure(error.message);
      setIsLoading(false);
    }
  };

  return (
    <CollectionNav>
      <section className=" w-full">
        <div className="likes-container">
          <BackBtn title="Likes" />
          {!isLoading ? (
            <CatsGrid catsData={cats} />
          ) : (
            <div className="flex items-center justify-center h-[100vh]">
              <Loader width="200" height="200" />
            </div>
          )}
          <Pagination
            onBtnNextClick={onBtnNextClick}
            onBtnPrevClick={onBtnPrevClick}
            page={page}
            catsLength={cats.length}
          />
        </div>
      </section>
    </CollectionNav>
  );
};
