import { BackBtn } from "@/components/ui/BackBtn";
import { CatsGrid } from "@/components/ui/CatsGrid";
import { CollectionNav } from "@/components/ui/CollectionNav";
import { CatServices } from "@/services/CatServices";
import { ICat } from "@/ts/interfaces";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";

export const Search: FC = () => {
  const [searchBreeds, setSearchBreeds] = useState<ICat[]>([]);
  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    if (!query.data) {
      return;
    }
    (async () => {
      const data = await CatServices.searchBreeds(query.data as string);
      setSearchBreeds(data);
    })();
  }, [query.data]);

  return (
    <CollectionNav>
      <section className=" w-full">
        <div className="p-[20px] dark:bg-[--dark-mode-bg] bg-[--background-second-color] rounded-[20px] flex flex-col gap-[20px]">
          <BackBtn title="Search" />
          <p>
            Search results for:{" "}
            <span className="text-[--foreground-second-color] font-medium dark:text-[#FFFFFF]">
              {searchBreeds[0]?.breeds?.name}
            </span>
          </p>
          <CatsGrid catsData={searchBreeds} />
        </div>
      </section>
    </CollectionNav>
  );
};
