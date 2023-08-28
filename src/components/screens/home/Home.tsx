import Image from "next/image";

import { FC } from "react";

export const Home: FC = () => {
  return (
    <section className="w-full hidden lg:block">
      <div className="rounded-[20px] bg-[#FBE0DC] w-full h-[840px] dark:bg-[--dark-mode-bg] "></div>
      <div className="absolute right-[-30px] top-0 bg-hero-pattern w-[775px] h-[900px] bg-contain bg-no-repeat bg-center"></div>
    </section>
  );
};
