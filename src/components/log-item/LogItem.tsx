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
    <li className="flex items-center justify-between">
      <div className="flex items-center gap-[30px]">
        <p>{time}</p>
        <p>
          Image ID: <span className="text-[#1D1D1D] font-medium">{id}</span> was{" "}
          {text}
        </p>
      </div>

      {text === "added to Dislikes" && (
        <Dislike width="20" height="20" color="#FFD280" />
      )}
      {text === "added to Favorites" && <Favorite width="20" height="17" />}
      {text === "added to Likes" && (
        <Like width="20" height="20" color="#97EAB9" />
      )}
    </li>
  );
};
