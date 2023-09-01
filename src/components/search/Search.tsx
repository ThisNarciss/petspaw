import { BackBtn } from "@/components/ui/BackBtn";
import { CatsGrid } from "@/components/ui/CatsGrid";
import { CollectionNav } from "@/components/ui/CollectionNav";
import { CatServices } from "@/services/CatServices";
import { ICat } from "@/ts/interfaces";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { Pagination } from "../ui/Pagination";
import { Notify } from "notiflix";
import { Loader } from "../loader/Loader";

export const Search: FC = () => {
  const [searchBreeds, setSearchBreeds] = useState<ICat[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    if (!query.data) {
      return;
    }
    setIsLoading(true);
    (async () => {
      const data = await CatServices.searchBreeds(query.data as string);
      setSearchBreeds(data);
      setIsLoading(false);
    })();
  }, [query.data]);

  const onBtnPrevClick = async () => {
    try {
      if (page === 0) {
        return;
      }
      setIsLoading(true);
      let prevPage = page - 1;

      const data = await CatServices.searchBreeds(
        query.data as string,
        15,
        prevPage
      );
      if (data.name === "AxiosError") {
        throw new Error(`${data.message}`);
      }
      setSearchBreeds(data);
      setPage((prevState) => prevState - 1);
      setIsLoading(false);
    } catch (error: any) {
      Notify.failure(error);
      setIsLoading(false);
    }
  };

  const onBtnNextClick = async () => {
    try {
      if (searchBreeds.length < 15) {
        return;
      }
      setIsLoading(true);
      let nextPage = page + 1;

      const data = await CatServices.searchBreeds(
        query.data as string,
        15,
        nextPage
      );
      if (data.name === "AxiosError") {
        throw new Error(`${data.message}`);
      }
      setSearchBreeds(data);
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
        <div className="search-container">
          <BackBtn title="Search" />
          <p>
            Search results for:{" "}
            <span className="search-accent-text">
              {searchBreeds[0]?.allBreeds
                ? "All breeds"
                : searchBreeds[0]?.breeds?.name}
            </span>
          </p>
          {!isLoading ? (
            <CatsGrid catsData={searchBreeds} />
          ) : (
            <div className="flex items-center justify-center h-[100vh]">
              <Loader width="200" height="200" />
            </div>
          )}
          <Pagination
            onBtnNextClick={onBtnNextClick}
            onBtnPrevClick={onBtnPrevClick}
            page={page}
            catsLength={searchBreeds.length}
          />
        </div>
      </section>
    </CollectionNav>
  );
};
