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
    <div className="collection-nav-box">
      <header className="collection-nav-header">
        <button
          onClick={onBurgerBtnClick}
          className="collection-nav-burger-btn"
        >
          <Burger />
        </button>

        <SearchForm />

        {VOTES_LINKS.map((link) => {
          const isActive = link.href === pathname;
          return (
            <Link
              key={link.href}
              className={`collection-nav-link ${
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
