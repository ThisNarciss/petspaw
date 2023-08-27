import { Dislike } from "@/svg/Dislike";
import { Done } from "@/svg/Done";
import { Error } from "@/svg/Error";
import { Favorite } from "@/svg/Favorite";
import { Like } from "@/svg/Like";
import { FC } from "react";

interface IProps {
  time?: string;
  id?: string;
  text: string | number;
}

export const LogItem: FC<IProps> = ({ time, id, text }) => {
  return typeof text !== "number" ? (
    <li className="flex items-center justify-between px-[25px] py-[18px] bg-[#F8F8F7] rounded-[10px]">
      <div className="flex items-center gap-[30px]">
        <p className="px-[10px] py-[3px] text-[--foreground-second-color] text-[16px] leading-6 bg-[--background-second-color] rounded-[5px]">
          {time}
        </p>
        <p className="text-[16px] leading-6">
          Image ID:{" "}
          <span className="text-[--foreground-second-color] font-medium">
            {id}
          </span>{" "}
          was {text}
        </p>
      </div>
      {text === "added to Dislikes" && (
        <div className="text-[#FFD280] fill-current">
          <Dislike width="20" height="20" />
        </div>
      )}
      {text === "added to Favorites" && (
        <div className="text-[#FF868E] fill-current">
          <Favorite width="20" height="17" />
        </div>
      )}
      {text === "added to Likes" && (
        <div className="text-[#97EAB9] fill-current">
          <Like width="20" height="20" />
        </div>
      )}
    </li>
  ) : (
    <li className="flex items-center justify-between px-[25px] py-[18px] bg-[--background-second-color] rounded-[10px]">
      {text === 1 && (
        <>
          <div className="flex items-center gap-[10px]">
            <div className="text-[#FFD280] fill-current">
              <Done width="20" height="20" />
            </div>
            <p className="text-[16px] leading-6">
              Thanks for the Upload - Cat found!
            </p>
          </div>
        </>
      )}
      {text === 0 && (
        <>
          <div className="flex items-center gap-[10px]">
            <div className="text-[#FF868E] fill-current">
              <Error width="20" height="20" />
            </div>
            <p className="text-[16px] leading-6">
              Copy No Cat found - try a different one
            </p>
          </div>
        </>
      )}
    </li>
  );
};
