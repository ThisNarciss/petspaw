import { SearchForm } from "@/components/form/SearchForm";
import { BackBtn } from "@/components/ui/BackBtn";
import { Dislike } from "@/svg/Dislike";
import { Favorite } from "@/svg/Favorite";
import { Like } from "@/svg/Like";
import Link from "next/link";

export const Voting = () => {
  return (
    <section className="flex flex-col gap-[10px]">
      <div className="flex items-center justify-between gap-[10px]">
        <SearchForm />
        <Link
          className="p-[15px] rounded-[20px] bg-[#FFFFFF] hover:bg-[#FBE0DC]"
          href="/likes"
        >
          <Like />
        </Link>
        <Link
          className="p-[15px] rounded-[20px] bg-[#FFFFFF] hover:bg-[#FBE0DC]"
          href="/favorites"
        >
          <Favorite />
        </Link>
        <Link
          className="p-[15px] rounded-[20px] bg-[#FFFFFF] hover:bg-[#FBE0DC]"
          href="/dislikes"
        >
          <Dislike />
        </Link>
      </div>
      <div className="p-[20px] bg-[#FFFFFF] rounded-[20px]">
        <BackBtn />
      </div>
    </section>
  );
};
