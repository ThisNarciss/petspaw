import { Cross } from "@/svg/Cross";
import { Favorite } from "@/svg/Favorite";
import { FavoriteFill } from "@/svg/FavoriteFill";
import { ICat } from "@/ts/interfaces";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, MouseEvent } from "react";

interface IProps {
  catsData: ICat[];
  onClick?: (e: MouseEvent<HTMLButtonElement>) => Promise<void>;
  isDelBtnNeed?: boolean;
  onBtnDelClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const CatsGrid: FC<IProps> = ({
  catsData,
  onClick,
  isDelBtnNeed = false,
  onBtnDelClick,
}) => {
  const { pathname } = useRouter();

  return (
    <>
      {Boolean(catsData.length) ? (
        <ul
          className={`cat-grid-list ${
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
                className={`cat-grid-item ${
                  catsData.length > 0 && idx === 0
                    ? "col-start-1 row-start-1 row-end-3"
                    : ""
                } ${
                  catsData.length > 1 && idx === 1
                    ? "col-start-2 row-start-1"
                    : ""
                } ${
                  catsData.length > 2 && idx === 2
                    ? "col-start-3 row-start-1"
                    : ""
                } ${
                  catsData.length > 3 && idx === 3
                    ? "col-start-2 col-end-4 row-start-2 row-end-4"
                    : ""
                } ${
                  catsData.length > 4 && idx === 4
                    ? "col-start-1 row-start-3"
                    : ""
                } ${
                  catsData.length > 5 && idx === 5
                    ? "col-start-1 row-start-4 row-end-4"
                    : ""
                } ${
                  catsData.length > 6 && idx === 6
                    ? "col-start-2 row-start-4 row-end-4"
                    : ""
                } ${
                  catsData.length > 7 && idx === 7
                    ? "col-start-3 row-start-4 row-end-6"
                    : ""
                } ${
                  catsData.length > 8 && idx === 8
                    ? "col-start-1 col-end-3 row-start-5 row-end-7"
                    : ""
                } ${
                  catsData.length > 9 && idx === 9
                    ? "col-start-3 row-start-6 "
                    : ""
                } ${
                  catsData.length > 10 && idx === 10
                    ? "col-start-3 row-start-7 "
                    : ""
                } ${
                  catsData.length > 11 && idx === 11
                    ? "col-start-2 row-start-7"
                    : ""
                } ${
                  catsData.length > 12 && idx === 12
                    ? "col-start-1 row-start-7 row-end-9"
                    : ""
                } ${
                  catsData.length > 13 && idx === 13
                    ? "col-start-2 col-end-4 row-start-8 row-end-10"
                    : ""
                } ${
                  catsData.length > 14 && idx === 14
                    ? "col-start-1 row-start-9"
                    : ""
                } 
                 
                ${
                  catsData.length > 15 && idx === 15
                    ? "col-start-1 row-start-10"
                    : ""
                } ${
                  catsData.length > 16 && idx === 16
                    ? "col-start-2 row-start-10"
                    : ""
                } ${
                  catsData.length > 17 && idx === 17
                    ? "col-start-3 row-start-10 row-end-12"
                    : ""
                } ${
                  catsData.length > 18 && idx === 18
                    ? "col-start-1 col-end-3 row-start-11 row-end-13"
                    : ""
                } ${
                  catsData.length > 19 && idx === 19
                    ? "col-start-3 row-start-12"
                    : ""
                }`}
                key={item.id}
              >
                <Image
                  className="cat-grid-img"
                  src={item.image.url}
                  alt="cat picture"
                  width={640}
                  height={360}
                  priority
                />

                {isDelBtnNeed && (
                  <div className="cat-grid-btn-box">
                    {pathname === "/favorites" && (
                      <button
                        type="button"
                        id={item.id.toString()}
                        onClick={onClick}
                        className="cat-grid-btn"
                      >
                        <FavoriteFill />
                      </button>
                    )}
                    {pathname === "/breeds" && (
                      <Link
                        id={item.id.toString()}
                        href={`/breeds/${item.breeds?.id}`}
                        className="cat-grid-link"
                      >
                        {item.breeds?.name}
                      </Link>
                    )}
                    ,
                    {pathname === "/gallery" && (
                      <>
                        <button
                          onClick={onBtnDelClick}
                          id={item.id.toString()}
                          type="button"
                          className="cat-grid-del-btn"
                        >
                          <Cross width="12" height="12" />
                        </button>
                        <button
                          type="button"
                          id={item.id.toString()}
                          onClick={onClick}
                          className="cat-grid-btn-fav"
                        >
                          {<Favorite />}
                        </button>
                      </>
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
