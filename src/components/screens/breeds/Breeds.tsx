import { Notify } from "notiflix";
import { FC, useState } from "react";
import Select, { MultiValue, SingleValue } from "react-select";
import { Loader } from "@/components/loader/Loader";
import { BackBtn } from "@/components/ui/BackBtn";
import { CatsGrid } from "@/components/ui/CatsGrid";
import { CollectionNav } from "@/components/ui/CollectionNav";
import { IProps } from "@/pages/breeds";
import { CatServices } from "@/services/CatServices";
import { SortDown } from "@/svg/SortDown";
import { SortUp } from "@/svg/SortUp";
import { styledSelect } from "@/utils/styledSelect";
import { Pagination } from "@/components/ui/Pagination";

interface IOption {
  readonly value: string;
  readonly label: string;
}

const options = [
  { value: "5", label: "Limit: 5" },
  { value: "10", label: "Limit: 10" },
  { value: "15", label: "Limit: 15" },
  { value: "20", label: "Limit: 20" },
];

export const Breeds: FC<IProps> = ({ breedsList, searchBreeds }) => {
  const [findBreeds, setFindBreeds] = useState(searchBreeds);
  const [page, setPage] = useState(0);
  const [breed, setBreed] = useState("all breeds");
  const [lim, setLim] = useState(15);
  const [isLoading, setIsLoading] = useState(false);

  const selectBreedsStyles = styledSelect({});
  const selectLimitStyles = styledSelect({});

  const onBtnPrevClick = async () => {
    try {
      if (page === 0) {
        return;
      }
      setIsLoading(true);
      let prevPage = page - 1;
      const data = await CatServices.searchBreeds(breed, lim, prevPage);
      if (data.name === "AxiosError") {
        throw new Error(`${data.message}`);
      }
      setFindBreeds(data);
      setPage((prevState) => prevState - 1);
      setIsLoading(false);
    } catch (error: any) {
      Notify.failure(error);
      setIsLoading(false);
    }
  };

  const onBtnNextClick = async () => {
    try {
      if (findBreeds.length < lim) {
        return;
      }
      setIsLoading(true);
      let nextPage = page + 1;

      const data = await CatServices.searchBreeds(breed, lim, nextPage);

      if (data.name === "AxiosError") {
        throw new Error(`${data.message}`);
      }

      setFindBreeds(data);
      setPage((prevState) => prevState + 1);
      setIsLoading(false);
    } catch (error: any) {
      Notify.failure(error);
      setIsLoading(false);
    }
  };

  const onSortedBtnUpClick = () => {
    const sortedBreeds = [...findBreeds].sort((a, b) => {
      const nameA = a.breeds?.name || "";
      const nameB = b.breeds?.name || "";
      return nameA.localeCompare(nameB);
    });
    setFindBreeds(sortedBreeds);
  };
  const onSortedBtnDownClick = () => {
    const sortedBreeds = [...findBreeds].sort((a, b) => {
      const nameA = a.breeds?.name || "";
      const nameB = b.breeds?.name || "";
      return nameB.localeCompare(nameA);
    });
    setFindBreeds(sortedBreeds);
  };

  const onBreedsChange = async (
    newValue: MultiValue<IOption> | SingleValue<IOption>
  ) => {
    try {
      setIsLoading(true);
      if (newValue !== null) {
        if ("label" in newValue) {
          const { label } = newValue;

          const selectedBreed = await CatServices.searchBreeds(label, lim);
          if (selectedBreed.name === "AxiosError") {
            throw new Error(`${selectedBreed.message}`);
          }
          setFindBreeds(selectedBreed);
          setBreed(label);
          setIsLoading(false);
          setPage(0);
        }
      }
    } catch (error: any) {
      Notify.failure(error);
      setIsLoading(false);
    }
  };
  const onLimitsChange = async (
    newValue: MultiValue<IOption> | SingleValue<IOption>
  ) => {
    try {
      setIsLoading(true);
      if (newValue !== null) {
        if ("value" in newValue) {
          const { value } = newValue;

          const selectedBreed = await CatServices.searchBreeds(
            breed,
            Number(value)
          );
          if (selectedBreed.name === "AxiosError") {
            throw new Error(`${selectedBreed.message}`);
          }
          setFindBreeds(selectedBreed);
          setLim(Number(value));
          setIsLoading(false);
          setPage(0);
        }
      }
    } catch (error: any) {
      Notify.failure(error);
      setIsLoading(false);
    }
  };

  return (
    <CollectionNav>
      <section className="flex flex-col gap-[10px] ">
        <div className="breeds-container">
          <div className="breeds-filter-box">
            <BackBtn title="Breeds" />

            <Select
              className="w-full md:w-[226px]"
              defaultValue={breedsList[0]}
              options={breedsList}
              styles={selectBreedsStyles}
              onChange={onBreedsChange}
            />

            <Select
              className="w-[65%] md:w-[101px]"
              defaultValue={options[2]}
              options={options}
              styles={selectLimitStyles}
              onChange={onLimitsChange}
            />
            <button
              type="button"
              onClick={onSortedBtnUpClick}
              className="breeds-filter-sort-btn"
            >
              <SortUp />
            </button>
            <button
              type="button"
              onClick={onSortedBtnDownClick}
              className="breeds-filter-sort-btn"
            >
              <SortDown />
            </button>
          </div>
          {!isLoading ? (
            <CatsGrid catsData={findBreeds} isDelBtnNeed />
          ) : (
            <div className="flex items-center justify-center h-[100vh]">
              <Loader width="200" height="200" />
            </div>
          )}
          <Pagination
            onBtnNextClick={onBtnNextClick}
            onBtnPrevClick={onBtnPrevClick}
            page={page}
            catsLength={findBreeds.length}
            limit={lim}
          />
        </div>
      </section>
    </CollectionNav>
  );
};
