import { NAV_LINKS, VOTES_LINKS } from "@/utils/constants";
import { FC, ReactNode, useState } from "react";
import { SearchForm } from "../form/SearchForm";
import Link from "next/link";
import { Like } from "@/svg/Like";
import { Favorite } from "@/svg/Favorite";
import { Dislike } from "@/svg/Dislike";
import { useRouter } from "next/router";
import { Burger } from "@/svg/Burger";
import { Navigation } from "./Navigation";
import { Cross } from "@/svg/Cross";
import { Logo } from "@/svg/Logo";

interface IProps {
  children: ReactNode;
}

export const CollectionNav: FC<IProps> = ({ children }) => {
  const { pathname } = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onBurgerBtnClick = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="flex flex-col gap-[10px] w-full relative overflow-hidden">
      <header className="flex md:items-center md:flex-nowrap flex-wrap justify-between gap-[10px] overflow-hidden">
        <button
          onClick={onBurgerBtnClick}
          className="fill-current bg-[#FFFFFF] rounded-[20px] text-[#FF868E] hover:text-[#FFFFFF] hover:bg-[#FF868E] dark:bg-[--dark-mode-drop-bg] px-[15px] py-[21px]  lg:hidden mr-auto md:mr-[0px]"
        >
          <Burger />
        </button>

        <SearchForm />

        {VOTES_LINKS.map((link) => {
          const isActive = link.href === pathname;
          return (
            <Link
              key={link.href}
              className={`p-[15px] rounded-[20px]  hover:bg-[#FBE0DC] fill-current  dark:hover:bg-[#FBE0DC] ${
                isActive
                  ? "bg-[#FF868E] text-[--background-second-color]"
                  : "bg-[--background-second-color] text-[#FF868E] dark:bg-[--dark-mode-second-bg]"
              }`}
              href={link.href}
            >
              {link.href === "/likes" && <Like />}
              {link.href === "/favorites" && <Favorite />}
              {link.href === "/dislikes" && <Dislike />}
            </Link>
          );
        })}
      </header>
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
      {children}
    </div>
  );
};
