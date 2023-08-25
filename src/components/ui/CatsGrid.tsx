import { FavoriteFill } from "@/svg/FavoriteFill";
import { ICat } from "@/ts/interfaces";
import Image from "next/image";
import { FC, MouseEvent, ReactNode } from "react";

interface IProps {
  catsData: ICat[];
  onClick?: (e: MouseEvent<HTMLButtonElement>) => Promise<void>;
  isDelBtnNeed?: boolean;
}

export const CatsGrid: FC<IProps> = ({
  catsData,
  onClick,
  isDelBtnNeed = false,
}) => {
  return (
    <>
      {Boolean(catsData.length) ? (
        <ul className="grid grid-cols-home-columns grid-rows-home-rows gap-[20px] mb-[40px] ">
          {catsData.map((item, idx) => {
            return (
              <li
                className={`relative rounded-[20px] overflow-hidden ${
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
                  idx === 13 && "col-start-2 col-end-4 row-start-8 row-end-10"
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

                {isDelBtnNeed && (
                  <div className="absolute top-0 left-0 w-full h-full bg-[--img-hover] rounded-[20px] flex items-center justify-center opacity-0  hover:opacity-100">
                    <button
                      id={item.id.toString()}
                      onClick={onClick}
                      className="fill-current text-[#FF868E] bg-[#FFFFFF] p-[10px] rounded-[10px] focus:text-[#FFFFFF] hover:text-[#FFFFFF] focus:bg-[#FF868E] hover:bg-[#FF868E] focus"
                    >
                      <FavoriteFill />
                    </button>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="text-[16px] leading-6">No item found</p>
      )}
    </>
  );
};
