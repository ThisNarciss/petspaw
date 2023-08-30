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
      className={`search-form ${
        isFocused
          ? "border-[#FF868E]"
          : "border-[--background-second-color] dark:border-[--dark-mode-darkest-bg]"
      } `}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="relative w-full">
        <input
          onFocus={handleFocus}
          onChange={onChange}
          onBlur={handleBlur}
          className="search-input"
          placeholder="Search for breeds by name"
          defaultValue={watch("search")}
          name={name}
          ref={ref}
        />
        {errors.search && (
          <span className="search-error-msg">This field is required</span>
        )}
      </div>

      <button className="search-btn">
        <Search />
      </button>
    </form>
  );
};
