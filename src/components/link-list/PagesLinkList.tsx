import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const PagesLinkList: FC = () => {
  return (
    <div>
      <h2 className="text-[var(--foreground-second-color)] font-medium mb-[20px]">
        Lets start using The Cat API
      </h2>
      <ul className="flex items-center gap-[16px]">
        <li className="flex flex-col items-center gap-[10px]">
          <div className="flex items-center justify-center bg-[#B4B7FF] border-[4px] border-[rgba(180, 183, 255, 0.60)] rounded-[20px] border-solid w-[138px] h-[198px]">
            <Image
              src={"/images/vote-table@1x.png"}
              alt="vote table"
              className=""
              width={100}
              height={125}
              loading="lazy"
            />
          </div>

          <Link
            className="py-[10px] w-[138px] rounded-[10px] bg-[#FFFFFF] text-[#FF868E] text-[12px] font-medium leading-[1.33] text-center hover:bg-[#FBE0DC]"
            href={"/voting"}
          >
            Voting
          </Link>
        </li>
        <li className="flex flex-col items-center gap-[10px]">
          <div className="flex items-center justify-center bg-[#97EAB9] border-[4px] border-[rgba(151, 234, 185, 0.60)] rounded-[20px] border-solid w-[138px] h-[198px]">
            <Image
              src={"/images/pet-breeds@1x.png"}
              alt="cat wave paw"
              className=""
              width={117}
              height={163}
              loading="lazy"
            />
          </div>
          <Link
            className="py-[10px] w-[138px] rounded-[10px] bg-[#FFFFFF] text-[#FF868E] text-[12px] font-medium leading-[1.33] text-center hover:bg-[#FBE0DC]"
            href={"/breeds"}
          >
            Breeds
          </Link>
        </li>
        <li className="flex flex-col items-center gap-[10px]">
          <div className="flex items-center justify-center bg-[#FFD280] border-[4px] border-[rgba(255, 210, 128, 0.60)] rounded-[20px] border-solid w-[138px] h-[198px]">
            <Image
              src={"/images/images-search@1x.png"}
              alt="search images"
              className=""
              width={112}
              height={190}
              loading="lazy"
            />
          </div>
          <Link
            className="py-[10px] w-[138px] rounded-[10px] bg-[#FFFFFF] text-[#FF868E] text-[12px] font-medium leading-[1.33] text-center hover:bg-[#FBE0DC]"
            href={"/gallery"}
          >
            Gallery
          </Link>
        </li>
      </ul>
    </div>
  );
};
