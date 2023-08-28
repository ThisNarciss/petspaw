import { Jost } from "next/font/google";
import { Logo } from "@/svg/Logo";
import { FC, ReactNode, useState, useEffect } from "react";
import Head from "next/head";
import { Navigation } from "@/components/ui/Navigation";
import { NAV_LINKS } from "@/utils/constants";
import Link from "next/link";
import { MaterialUISwitch } from "./Swich.styled";
import { useRouter } from "next/router";

const jost = Jost({ subsets: ["latin"], weight: ["400", "500"] });

interface IProps {
  children: ReactNode;
}

export const SharedLayout: FC<IProps> = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      setIsChecked(true);
      setIsDark(true);
    }
  }, []);

  const onBtnClick = () => {
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsChecked(true);
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "white");
      setIsChecked(false);
      setIsDark(false);
    }
  };

  return (
    <>
      <Head>
        <title>Pets Paw</title>
      </Head>
      <div
        className={`lg:container md:container sm:container px-[30px] mx-auto ${jost.className} dark:bg-[--foreground-second-color]`}
      >
        <main className="flex relative items-start py-[30px] md:justify-center ">
          <section
            className={`sticky top-[30px] lg:pl-[117px] lg:pr-[137px]  h-[auto] dark:bg-[--foreground-second-color] lg:block ${
              pathname === "/" ? "md:block" : "md:hidden"
            }`}
          >
            <div className="mb-[80px] flex items-center justify-between">
              <Link
                className="fill-current text-[--foreground-second-color] dark:text-[#FFFFFF]"
                href="/"
              >
                <Logo />
              </Link>
              <MaterialUISwitch onClick={onBtnClick} checked={isChecked} />
            </div>

            <h1 className="text-[var(--foreground-second-color)] dark:text-[#FFFFFF] text-[44px] leading-[1.32] font-medium mb-[10px]">
              Hi!👋
            </h1>
            <p className="mb-[60px]">Welcome to MacPaw Bootcamp 2023</p>
            <div>
              <h2 className="text-[var(--foreground-second-color)] dark:text-[#FFFFFF] font-medium mb-[20px]">
                Lets start using The Cat API
              </h2>
              <nav>
                <ul className="flex items-center gap-[16px] uppercase">
                  <Navigation navLinks={NAV_LINKS} />
                </ul>
              </nav>
            </div>
          </section>
          {children}
        </main>
      </div>
    </>
  );
};
