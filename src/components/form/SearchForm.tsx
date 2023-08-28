import { Search } from "@/svg/Search";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/router";

type Inputs = {
  search: string;
};

export const SearchForm = () => {
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    router.push({
      pathname: "/search",
      query: { data: data.search },
    });
    reset();
  };
  const { onChange, name, ref } = register("search", {
    required: true,
  });

  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <form
      className={`flex items-center order-last md:order-none w-full justify-between gap-[10px] rounded-[20px] lg:w-[470px] md:w-[428px] py-[10px] px-[20px] bg-[--background-second-color]  border-[2px] border-solid hover:border-[#FBE0DC] dark:hover:border-[#FBE0DC] hover:border-[2px] hover:border-solid ${
        isFocused
          ? "border-[#FF868E]"
          : "border-[--background-second-color] dark:border-[--dark-mode-darkest-bg]"
      } dark:bg-[--dark-mode-bg]`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="relative w-full">
        <input
          onFocus={handleFocus}
          onChange={onChange}
          onBlur={handleBlur}
          className="placeholder:text-[--foreground-color] w-full outline-none dark:bg-[--dark-mode-darkest-bg]"
          placeholder="Search for breeds by name"
          defaultValue={watch("search")}
          name={name}
          ref={ref}
        />
        {errors.search && (
          <span className="absolute bottom-[-15px] left-0 text-[12px] text-red-600">
            This field is required
          </span>
        )}
      </div>

      <button className="p-[10px] bg-[#FBE0DC] dark:bg-[--dark-mode-second-bg] rounded-[10px] text-[#FF868E] fill-current hover:text-[--background-second-color] hover:bg-[#FF868E] dark:hover:bg-[#FF868E]">
        <Search />
      </button>
    </form>
  );
};
