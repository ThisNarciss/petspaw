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
    <li className="log-item">
      <p className="log-time">{time}</p>
      <p className="order-3 md:order-none text-[16px] leading-6 md:mr-auto">
        Image ID: <span className="log-accent-text">{id}</span> was {text}
      </p>

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
    <li className="log-item-modal">
      {text === 1 && (
        <>
          <div className="flex items-center gap-[10px] ">
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
              No Cat found - try a different one
            </p>
          </div>
        </>
      )}
    </li>
  );
};
