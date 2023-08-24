import { useState, FC } from "react";
import { BackBtn } from "@/components/ui/BackBtn";
import { CollectionNav } from "@/components/ui/CollectionNav";
import Image from "next/image";

interface IFavItem {
  id: number;
  image: { id: string; url: string };
  user_id: string;
}

interface IProps {
  favourite: IFavItem[];
}

export const Favorites: FC<IProps> = ({ favourite }) => {
  const [fav, setFav] = useState(favourite);

  return (
    <CollectionNav>
      <section className=" w-full">
        <div className="p-[20px] bg-[#FFFFFF] rounded-[20px] flex flex-col gap-[20px]">
          <BackBtn title="Favorites" />
          {fav.length && (
            <ul className="grid grid-cols-home-columns grid-rows-home-rows gap-[20px]">
              {fav.map((item, idx) => {
                return (
                  <li
                    className={`rounded-[20px] overflow-hidden ${
                      idx === 0 && "col-start-1 row-start-1 row-end-3"
                    } ${idx === 1 && "col-start-2 row-start-1"} ${
                      idx === 2 && "col-start-3 row-start-1"
                    } ${
                      idx === 3 && "col-start-2 col-end-4 row-start-2 row-end-4"
                    } ${idx === 4 && "col-start-1 row-start-3"} ${
                      idx === 5 && "col-start-1 row-start-4 row-end-4"
                    } ${idx === 6 && "col-start-2 row-start-4 row-end-4"} ${
                      idx === 7 && "col-start-3 row-start-4 row-end-6"
                    } ${
                      idx === 8 && "col-start-1 col-end-3 row-start-5 row-end-7"
                    } ${idx === 9 && "col-start-3 row-start-6 "} ${
                      idx === 10 && "col-start-3 row-start-7 "
                    } ${idx === 11 && "col-start-2 row-start-7"} ${
                      idx === 12 && "col-start-1 row-start-7 row-end-9"
                    } ${
                      idx === 13 &&
                      "col-start-2 col-end-4 row-start-8 row-end-10"
                    } ${idx === 14 && "col-start-1 row-start-9"}`}
                    key={item.id}
                  >
                    <Image
                      className="rounded-[20px] object-cover w-full h-full"
                      src={item.image.url}
                      alt="cat picture"
                      width={640}
                      height={360}
                    />
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </section>
    </CollectionNav>
  );
};
