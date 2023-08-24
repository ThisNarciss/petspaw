import { VOTES_LINKS } from "@/utils/constants";
import { FC, ReactNode } from "react";
import { SearchForm } from "../form/SearchForm";
import Link from "next/link";
import { Like } from "@/svg/Like";
import { Favorite } from "@/svg/Favorite";
import { Dislike } from "@/svg/Dislike";
import { useRouter } from "next/router";

interface IProps {
  children: ReactNode;
}

export const CollectionNav: FC<IProps> = ({ children }) => {
  const { pathname } = useRouter();

  return (
    <div className="flex flex-col gap-[10px]">
      <header className="flex items-center justify-between gap-[10px]">
        <SearchForm />
        {VOTES_LINKS.map((link) => {
          const isActive = link.href === pathname;
          return (
            <Link
              key={link.href}
              className={`p-[15px] rounded-[20px]  hover:bg-[#FBE0DC] fill-current  ${
                isActive
                  ? "bg-[#FF868E] text-[#FFFFFF]"
                  : "bg-[#FFFFFF] text-[#FF868E]"
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
      {children}
    </div>
  );
};
