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
      className={`burger-box ${
        isMenuOpen ? "translate-x-[0%]" : "translate-x-[-100%]"
      } pt-[110px] dark:bg-[--foreground-second-color]`}
    >
      <Link className="burger-box-logo" href="/">
        <Logo />
      </Link>
      <button className="burger-box-close-btn" onClick={onBurgerBtnClick}>
        <Cross />
      </button>
      <ul className="burger-box-list">
        <Navigation navLinks={NAV_LINKS} />
      </ul>
    </div>
  );
};
