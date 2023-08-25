import { SearchForm } from "@/components/form/SearchForm";
import { BackBtn } from "@/components/ui/BackBtn";
import { CollectionNav } from "@/components/ui/CollectionNav";
import { Dislike } from "@/svg/Dislike";
import { Favorite } from "@/svg/Favorite";
import { Like } from "@/svg/Like";
import Link from "next/link";

export const Breeds = () => {
  return (
    <CollectionNav>
      <section className="flex flex-col gap-[10px] w-full">
        <div className="p-[20px] bg-[#FFFFFF] rounded-[20px]">
          <BackBtn title="Breeds" />
        </div>
      </section>
    </CollectionNav>
  );
};
