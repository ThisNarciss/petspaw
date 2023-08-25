import { Jost } from "next/font/google";
import { Logo } from "@/svg/Logo";
import { FC, ReactNode } from "react";
import Head from "next/head";
import { Navigation } from "@/components/ui/Navigation";
import { NAV_LINKS } from "@/utils/constants";
import Link from "next/link";

const jost = Jost({ subsets: ["latin"], weight: ["400", "500"] });

interface IProps {
  children: ReactNode;
}

export const SharedLayout: FC<IProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Pets Paw</title>
      </Head>
      <div
        className={`lg:container md:container sm:container px-[30px] mx-auto ${jost.className}`}
      >
        <main className="flex relative  items-start py-[30px] ">
          <section className="sticky top-[30px] pl-[107px] pr-[137px] h-[auto]">
            <div className="mb-[80px]">
              <Link href="/">
                <Logo />
              </Link>
            </div>
            <h1 className="text-[var(--foreground-second-color)] text-[44px] leading-[1.32] font-medium mb-[10px]">
              Hi!👋
            </h1>
            <p className="mb-[60px]">Welcome to MacPaw Bootcamp 2023</p>
            <div>
              <h2 className="text-[var(--foreground-second-color)] font-medium mb-[20px]">
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
