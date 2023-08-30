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
  const [breed, setBreed] = useState("all breeds");
  const [isLoading, setIsLoading] = useState(false);

  const selectBreedsStyles = styledSelect({});
  const selectLimitStyles = styledSelect({});

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

          const selectedBreed = await CatServices.searchBreeds(label);
          setFindBreeds(selectedBreed);
          setBreed(label);
          setIsLoading(false);
        }
      }
    } catch (error: any) {
      Notify.failure(error.message);
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

          const selectedBreed = await CatServices.searchBreeds(breed, value);
          setFindBreeds(selectedBreed);
          setIsLoading(false);
        }
      }
    } catch (error: any) {
      Notify.failure(error.message);
      setIsLoading(false);
    }
  };

  return (
    <CollectionNav>
      <section className="flex flex-col gap-[10px] ">
        <div className="p-[20px] bg-[--background-second-color] rounded-[20px] dark:bg-[--dark-mode-bg]">
          <div className="flex flex-wrap md:flex-nowrap md:items-center mb-[20px] gap-[10px] ">
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
              className="fill-current rounded-[10px] bg-[#F8F8F7] p-[8px] border-[2px] border-solid border-[#F8F8F7] hover:text-[#FF868E] dark:bg-[--dark-mode-drop-bg] hover:border-[#FBE0DC] dark:border-[--dark-mode-drop-bg] dark:hover:border-[--dark-mode-second-bg]"
            >
              <SortUp />
            </button>
            <button
              type="button"
              onClick={onSortedBtnDownClick}
              className="fill-current rounded-[10px] bg-[#F8F8F7] p-[8px] border-[2px] border-solid border-[#F8F8F7] hover:text-[#FF868E] dark:bg-[--dark-mode-drop-bg] hover:border-[#FBE0DC] dark:border-[--dark-mode-drop-bg] dark:hover:border-[--dark-mode-second-bg]"
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
        </div>
      </section>
    </CollectionNav>
  );
};
