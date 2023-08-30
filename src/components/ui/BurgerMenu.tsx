import { Cross } from "@/svg/Cross";
import { FC } from "react";
import { Logo } from "@/svg/Logo";
import Link from "next/link";
import { Navigation } from "./Navigation";
import { NAV_LINKS } from "@/utils/constants";

interface IProps {
  isMenuOpen: boolean;
  onBurgerBtnClick: () => void;
}

export const BurgerMenu: FC<IProps> = ({ isMenuOpen, onBurgerBtnClick }) => {
  return (
    <div
      className={`block md:flex items-start justify-center gap-[16px] transition-transform lg:hidden w-[100%] h-[100%] top-0 left-0 absolute bg-[#F8F8F7] z-[999] rounded-[20px] ${
        isMenuOpen ? "translate-x-[0%]" : "translate-x-[-100%]"
      } pt-[110px] dark:bg-[--foreground-second-color]`}
    >
      <Link
        className="absolute left-[30px] top-[30px] fill-current text-[--foreground-second-color] dark:text-[#FFFFFF]"
        href="/"
      >
        <Logo />
      </Link>
      <button
        className="absolute right-[30px] top-[30px] p-[18px] rounded-[20px] fill-current bg-[#FFFFFF] text-[#FF868E] hover:text-[#FFFFFF] hover:bg-[#FF868E] dark:bg-[--dark-mode-drop-bg] dark:hover:bg-[#FF868E]"
        onClick={onBurgerBtnClick}
      >
        <Cross />
      </button>
      <ul className="flex flex-col md:flex-row items-center gap-[16px] uppercase">
        <Navigation navLinks={NAV_LINKS} />
      </ul>
    </div>
  );
};
