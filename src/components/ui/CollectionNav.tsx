import { VOTES_LINKS } from "@/utils/constants";
import { FC, ReactNode, useState } from "react";
import { SearchForm } from "../form/SearchForm";
import Link from "next/link";
import { Like } from "@/svg/Like";
import { Favorite } from "@/svg/Favorite";
import { Dislike } from "@/svg/Dislike";
import { useRouter } from "next/router";
import { Burger } from "@/svg/Burger";
import { BurgerMenu } from "./BurgerMenu";

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
      <BurgerMenu isMenuOpen={isMenuOpen} onBurgerBtnClick={onBurgerBtnClick} />
      {children}
    </div>
  );
};
