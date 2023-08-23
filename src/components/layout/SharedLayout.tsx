import { Jost } from "next/font/google";
import { Logo } from "@/svg/Logo";
import { FC, ReactNode } from "react";
import { PagesLinkList } from "../link-list/PagesLinkList";
import Head from "next/head";

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
          <section className="sticky top-[30px] px-[137px] h-[auto]">
            <div className="mb-[80px]">
              <Logo width="147" height="30" />
            </div>
            <h1 className="text-[var(--foreground-second-color)] text-[44px] leading-[1.32] font-medium mb-[10px]">
              Hi!👋
            </h1>
            <p className="mb-[60px]">Welcome to MacPaw Bootcamp 2023</p>
            <PagesLinkList />
          </section>
          {children}
        </main>
      </div>
    </>
  );
};
