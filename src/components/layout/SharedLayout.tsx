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
      <div className={`layout-container ${jost.className} `}>
        <main className="layout-main">
          <section
            className={`sticky top-[30px] lg:pl-[117px] lg:pr-[137px]  h-[auto] dark:bg-[--foreground-second-color] lg:block ${
              pathname === "/" ? "block" : "hidden"
            }`}
          >
            <div className="mb-[80px] flex items-center justify-between">
              <Link className="layout-link" href="/">
                <Logo />
              </Link>
              <MaterialUISwitch onClick={onBtnClick} checked={isChecked} />
            </div>

            <h1 className="layout-title">Hi!👋</h1>
            <p className="mb-[60px]">Welcome to MacPaw Bootcamp 2023</p>
            <div>
              <p className="text-[var(--foreground-second-color)] dark:text-[#FFFFFF] font-medium mb-[20px]">
                Lets start using The Cat API
              </p>
              <nav>
                <ul className="flex flex-col md:flex-row items-center gap-[16px] uppercase">
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
