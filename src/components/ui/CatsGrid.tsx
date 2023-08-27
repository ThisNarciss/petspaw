import { Favorite } from "@/svg/Favorite";
import { FavoriteFill } from "@/svg/FavoriteFill";
import { ICat } from "@/ts/interfaces";
import { imgGridStyles } from "@/utils/imgGridStyles";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
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
  const { pathname, push } = useRouter();

  return (
    <>
      {Boolean(catsData.length) ? (
        <ul
          className={`grid grid-cols-home-columns ${
            catsData.length <= 5 && catsData.length > 0
              ? "grid-rows-threeRows"
              : ""
          } ${
            catsData.length <= 10 && catsData.length > 5
              ? "grid-rows-sixRows"
              : ""
          } ${
            catsData.length <= 15 && catsData.length > 10
              ? "grid-rows-nineRows"
              : ""
          } ${
            catsData.length <= 20 && catsData.length > 15
              ? "grid-rows-twelveRows"
              : ""
          } gap-[20px] mb-[40px] `}
        >
          {catsData.map((item, idx) => {
            return (
              <li
                className={`relative rounded-[20px] overflow-hidden ${imgGridStyles(
                  catsData.length,
                  idx
                )}`}
                key={item.id}
              >
                <Image
                  className="rounded-[20px] object-center  object-cover w-full h-full"
                  src={item.image.url}
                  alt="cat picture"
                  width={640}
                  height={360}
                />

                {isDelBtnNeed && (
                  <div className="absolute top-0 left-0 w-full h-full bg-[--img-hover] rounded-[20px] flex items-center justify-center opacity-0  hover:opacity-100 p-[10px]">
                    {pathname === "/favorites" && (
                      <button
                        type="button"
                        id={item.id.toString()}
                        onClick={onClick}
                        className="fill-current text-[#FF868E] bg-[#FFFFFF] p-[10px] rounded-[10px] focus:text-[#FFFFFF] hover:text-[#FFFFFF] focus:bg-[#FF868E] hover:bg-[#FF868E] focus:text-[#FFFFFF]"
                      >
                        <FavoriteFill />
                      </button>
                    )}
                    {pathname === "/breeds" && (
                      <Link
                        id={item.id.toString()}
                        href={`/breeds/${item.breeds?.id}`}
                        className="fill-current text-center text-[16px] text-[#FF868E] bg-[#FFFFFF] w-full py-[5px] rounded-[10px] focus:text-[#FFFFFF] self-end hover:text-[#FFFFFF] focus:bg-[#FF868E] hover:bg-[#FF868E] focus:text-[#FFFFFF]"
                      >
                        {item.breeds?.name}
                      </Link>
                    )}
                    ,
                    {pathname === "/gallery" && (
                      <button
                        type="button"
                        id={item.id.toString()}
                        onClick={onClick}
                        className="fill-current text-[#FF868E] bg-[#FFFFFF] p-[10px] rounded-[10px] focus:text-[#FFFFFF] hover:text-[#FFFFFF] focus:bg-[#FF868E] hover:bg-[#FF868E] focus:text-[#FFFFFF]"
                      >
                        {<Favorite />}
                      </button>
                    )}
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
