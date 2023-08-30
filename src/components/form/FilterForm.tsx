import Select from "react-select";
import { Notify } from "notiflix";
import { FC, Dispatch } from "react";
import { Reload } from "@/svg/Reload";
import { SubmitHandler, useForm } from "react-hook-form";

import { styledSelect } from "@/utils/styledSelect";
import { ICat } from "@/ts/interfaces";
import { CatServices } from "@/services/CatServices";

type Inputs = {
  order: string;
  type: string;
  breed: string;
  limit: string;
};

interface IProps {
  breedsList: { value: string; label: string }[];
  setIsLoading: Dispatch<React.SetStateAction<boolean>>;
  setGallery: Dispatch<React.SetStateAction<ICat[]>>;
}

const limitOptions = [
  { value: "5", label: "5 items per page" },
  { value: "10", label: "10 items per page" },
  { value: "15", label: "15 items per page" },
  { value: "20", label: "20 items per page" },
];

const orderOptions = [
  { value: "RANDOME", label: "Random" },
  { value: "DESC", label: "Desc" },
  { value: "ASC", label: "Asc" },
];
const typeOptions = [
  { value: "jpg,gif,png", label: "All" },
  { value: "jpg,png", label: "Static" },
  { value: "gif", label: "Animated" },
];

export const FilterForm: FC<IProps> = ({
  setIsLoading,
  setGallery,
  breedsList,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      setIsLoading(true);
      const result = await CatServices.getGalleryCat(data);
      setGallery(result);
      setIsLoading(false);
      reset();
    } catch (error: any) {
      Notify.failure(error.message);
      setIsLoading(false);
      reset();
    }
  };

  const selectAllStyles = styledSelect({
    color: "#1D1D1D",
    bgColor: "#FFFFFF",
    borderColor: "#FFFFFF",
  });
  const selectLimitStyles = styledSelect({
    color: "#1D1D1D",
    bgColor: "#FFFFFF",
    borderColor: "#FFFFFF",
  });

  const handleOrderSelectChange = (selectedOptions: any) => {
    setValue("order", selectedOptions.value);
  };
  const handleTypeSelectChange = (selectedOptions: any) => {
    setValue("type", selectedOptions.value);
  };
  const handleBreedSelectChange = (selectedOptions: any) => {
    setValue("breed", selectedOptions.value);
  };
  const handleLimitSelectChange = (selectedOptions: any) => {
    setValue("limit", selectedOptions.value);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-center flex-wrap justify-between max-w-[668px] rounded-[20px] bg-[#F8F8F7] dark:bg-[--dark-mode-bg] p-[10px] md:p-[20px] gap-[20px] mb-[20px] w-full"
    >
      <label className="text-[10px] uppercase w-[275px] md:w-[290px]">
        <span className="ml-[10px] leading-[1.8]">Order</span>
        <Select
          defaultValue={orderOptions[0]}
          options={orderOptions}
          styles={selectAllStyles}
          {...register("order")}
          onChange={handleOrderSelectChange}
        />
      </label>
      <label className="text-[10px] uppercase w-[275px] md:w-[290px]">
        <span className="ml-[10px] leading-[1.8]">Type</span>
        <Select
          defaultValue={typeOptions[1]}
          options={typeOptions}
          styles={selectAllStyles}
          {...register("type")}
          onChange={handleTypeSelectChange}
        />
      </label>
      <label className="text-[10px] uppercase w-[275px] md:w-[290px]">
        <span className="ml-[10px] leading-[1.8]">Breed</span>
        <Select
          defaultValue={breedsList[0]}
          options={breedsList}
          styles={selectAllStyles}
          {...register("breed")}
          onChange={handleBreedSelectChange}
        />
      </label>

      <div className="flex flex-wrap md:flex-nowrap items-end justify-between gap-[10px]">
        <label className="text-[10px] uppercase w-[275px] md:w-[240px]">
          <span className="ml-[10px] leading-[1.8]">Limit</span>
          <Select
            defaultValue={limitOptions[1]}
            options={limitOptions}
            styles={selectLimitStyles}
            {...register("limit")}
            onChange={handleLimitSelectChange}
          />
        </label>

        <button className="fill-current bg-[--background-second-color] text-[#FF868E] p-[10px] rounded-[10px] hover:text-[--background-second-color] hover:bg-[#FF868E] focus:text-[--background-second-color] focus:bg-[#FF868E] dark:bg-[--foreground-second-color] dark:hover:bg-[#FF868E] w-full md:w-auto flex items-center justify-center">
          <Reload />
        </button>
      </div>
    </form>
  );
};
