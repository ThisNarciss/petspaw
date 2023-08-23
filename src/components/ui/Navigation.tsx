import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { getBgColor } from "@/utils/getBgBorderColor";
import { useRouter } from "next/router";

interface INavLinks {
  navLinks: {
    href: string;
    name: string;
    src: string;
    width: number;
    height: number;
    alt: string;
    imgBoxStyle: string;
  }[];
}

export const Navigation: FC<INavLinks> = ({ navLinks }) => {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((link, idx) => {
        const isActive = pathname === link.href;

        let active = "text-[#FFFFFF] bg-[#FF868E]";
        let inActive = "text-[#FF868E] bg-[#FFFFFF]";

        return (
          <li key={link.name} className="flex flex-col items-center gap-[10px]">
            <div
              className={`flex items-center justify-center border-[4px] rounded-[20px] border-solid w-[138px] h-[198px] ${getBgColor(
                idx
              )} ${isActive ? "border-[#FBE0DC]" : "border-[--border-purple]"}`}
            >
              <Image
                src={link.src}
                alt={link.alt}
                className=""
                width={link.width}
                height={link.height}
                loading="lazy"
              />
            </div>
            <Link
              className={`py-[10px] w-[138px] rounded-[10px] text-[12px] font-medium leading-[1.33] text-center hover:bg-[#FBE0DC] hover:text-[#FF868E] ${
                isActive ? active : inActive
              }`}
              href={link.href}
            >
              {link.name}
            </Link>
          </li>
        );
      })}
    </>
  );
};
