import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface INavLinks {
  navLinks: {
    href: string;
    name: string;
    src: string;
    width: number;
    height: number;
    alt: string;
  }[];
}

export const Navigation: FC<INavLinks> = ({ navLinks }) => {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((link, idx) => {
        const isActive = pathname === link.href;

        let active = "text-[--foreground-text-color] bg-[#FF868E]";
        let inActive =
          "text-[#FF868E] bg-[--background-second-color] dark:bg-[--dark-mode-bg]";
        let bgColor = "";
        switch (idx) {
          case 0:
            bgColor = "bg-[#B4B7FF]";

            break;
          case 1:
            bgColor = "bg-[#97EAB9]";

            break;
          case 2:
            bgColor = "bg-[#FFD280]";

            break;

          default:
            bgColor = "bg-[#B4B7FF]";

            break;
        }

        return (
          <li
            key={link.name}
            className="flex w-full md:w-auto flex-col md:items-center gap-[10px]"
          >
            <Link
              className="flex group flex-col items-center gap-[10px]"
              href={link.href}
            >
              <div
                className={`home-nav-img-box ${bgColor} ${
                  isActive ? "border-[#FBE0DC]" : "border-[--border-purple]"
                }`}
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
              <p
                className={`home-nav-text-box ${isActive ? active : inActive}`}
              >
                {link.name}
              </p>
            </Link>
          </li>
        );
      })}
    </>
  );
};
