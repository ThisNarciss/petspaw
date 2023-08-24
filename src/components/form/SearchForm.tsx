import { Search } from "@/svg/Search";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

type Inputs = {
  search: string;
};

export const SearchForm = () => {
  const [isFocused, setIsFocused] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const { onChange, onBlur, name, ref } = register("search", {
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
      className={`flex items-center justify-between gap-[10px] rounded-[20px] w-[470px] py-[10px] px-[20px] bg-[#ffffff] border-[2px] border-solid hover:border-[#FBE0DC] hover:border-[2px] hover:border-solid ${
        isFocused ? "border-[#FF868E]" : "border-[#FFFFFF]"
      }`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="relative w-full">
        <input
          onFocus={handleFocus}
          onChange={onChange}
          onBlur={handleBlur}
          className="placeholder:text-[#8C8C8C] w-full outline-none"
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

      <button className="p-[10px] bg-[#FBE0DC] rounded-[10px] text-[#FF868E] fill-current hover:text-[#FFFFFF] hover:bg-[#FF868E]">
        <Search />
      </button>
    </form>
  );
};
