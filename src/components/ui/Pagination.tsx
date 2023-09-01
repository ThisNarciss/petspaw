import { ArrowLeft } from "@/svg/ArrowRight";
import { FC } from "react";

interface IProps {
  onBtnPrevClick: () => void;
  onBtnNextClick: () => void;
  page: number;
  catsLength: number;
  limit?: number;
}

export const Pagination: FC<IProps> = ({
  onBtnPrevClick,
  onBtnNextClick,
  page,
  catsLength,
  limit = 15,
}) => {
  return (
    <ul className="mb-[20px] mt-[20px] flex items-center justify-center gap-[20px]">
      <li className="block">
        <button
          className={`fill-current flex items-center justify-center gap-[15px] text-[12px]  font-medium uppercase tracking-[2px]  px-[30px] py-[12px] rounded-[10px]  ${
            page === 0
              ? "text-[#8C8C8C] bg-[#F8F8F7] dark:bg-[--dark-mode-bg] cursor-auto"
              : "text-[#FF868E] bg-[#FBE0DC] dark:bg-[--dark-mode-second-bg] hover:text-[#FFFFFF] hover:bg-[#FF868E] dark:hover:bg-[#FF868E]"
          }`}
          onClick={onBtnPrevClick}
          type="button"
        >
          <ArrowLeft width="7" height="12" />
          <span>Prev</span>
        </button>
      </li>
      <li className="block">
        <button
          className={`fill-current flex items-center justify-center gap-[15px] text-[12px]  font-medium uppercase tracking-[2px]  px-[30px] py-[12px] rounded-[10px]  ${
            catsLength < limit
              ? "text-[#8C8C8C] bg-[#F8F8F7] dark:bg-[--dark-mode-bg] cursor-auto"
              : "text-[#FF868E] bg-[#FBE0DC] dark:bg-[--dark-mode-second-bg] hover:text-[#FFFFFF] hover:bg-[#FF868E] dark:hover:bg-[#FF868E]"
          }`}
          onClick={onBtnNextClick}
          type="button"
        >
          <span>Next</span>
          <div className="rotate-180">
            <ArrowLeft width="7" height="12" />
          </div>
        </button>
      </li>
    </ul>
  );
};
