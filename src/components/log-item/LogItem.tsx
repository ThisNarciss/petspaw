import { Dislike } from "@/svg/Dislike";
import { Favorite } from "@/svg/Favorite";
import { Like } from "@/svg/Like";
import { FC, JSXElementConstructor, ReactElement } from "react";

interface IProps {
  time: string;
  id: string;
  text: string;
}

export const LogItem: FC<IProps> = ({ time, id, text }) => {
  return (
    <li className="flex items-center justify-between px-[25px] py-[18px] bg-[#F8F8F7] rounded-[10px]">
      <div className="flex items-center gap-[30px]">
        <p className="px-[10px] py-[3px] text-[#1D1D1D] text-[16px] leading-6 bg-[#FFFFFF] rounded-[5px]">
          {time}
        </p>
        <p className="text-[16px] leading-6">
          Image ID: <span className="text-[#1D1D1D] font-medium">{id}</span> was{" "}
          {text}
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
  );
};
