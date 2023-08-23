import Image from "next/image";

import { FC } from "react";

export const Home: FC = () => {
  return (
    <>
      <section className="rounded-[20px] bg-[#FBE0DC] w-[680px] h-[840px]"></section>
      <div className="absolute right-[-30px] top-0 bg-hero-pattern w-[775px] h-[900px] bg-contain bg-no-repeat bg-center"></div>
    </>
  );
};
