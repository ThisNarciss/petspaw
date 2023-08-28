import { BackBtn } from "@/components/ui/BackBtn";
import { CatsGrid } from "@/components/ui/CatsGrid";
import { CollectionNav } from "@/components/ui/CollectionNav";
import { CatServices } from "@/services/CatServices";
import { ICat } from "@/ts/interfaces";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC, useEffect, useState, MouseEvent } from "react";

const btnInx = [0, 1, 2, 3, 4];

interface ICatInfo {
  url: string;
  id: string;
  breeds: {
    name: string;
    temperament: string;
    origin: string;
    weight: { metric: string };
    life_span: string;
    description: string;
  }[];
}

export const Cat: FC = () => {
  const [cat, setCat] = useState<ICatInfo[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const {
    query: { id },
  } = useRouter();

  const onBtnSlideClick = (e: MouseEvent<HTMLButtonElement>) => {
    const id = Number(e.currentTarget.id);
    setCurrentSlide(Number(id));
  };

  useEffect(() => {
    if (!id) {
      return;
    }
    (async () => {
      const breed = await CatServices.getBreedsById(id);

      setCat(breed);
    })();
  }, [id]);

  return (
    <CollectionNav>
      <section className=" w-full">
        <div className="p-[20px] bg-[--background-second-color] dark:bg-[--dark-mode-bg] rounded-[20px] flex flex-col gap-[20px]">
          <div className="flex items-center gap-[10px]">
            <BackBtn
              title="Breeds"
              bgColor="bg-[#FBE0DC] dark:bg-[--dark-mode-second-bg]"
              color="#FF868E"
            />
            <div className="py-[5px] px-[15px] md:px-[30px] rounded-[10px] bg-[#FF868E]">
              <h2 className="uppercase text-[--background-second-color] font-medium tracking-[2px]">
                {id}
              </h2>
            </div>
          </div>
          {Boolean(cat.length) && (
            <div>
              <div className=" flex  justify-center h-[ mb-[50px] relative w-[295px] h-[166px] md:w-[668px] md:h-[376px] lg:w-[640px] h-[360px]">
                <div className="flex">
                  {cat.map((item, index) => {
                    return (
                      <div
                        key={item.id}
                        className={`rounded-[20px] overflow-hidden w-[295px] h-[166px] md:w-[668px] md:h-[376px] lg:w-[640px] h-[360px] absolute top-0 left-0 ${
                          index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <Image
                          className="object-cover w-[295px] h-[166px] md:w-[668px] md:h-[376px] lg:w-[640px] lg:h-[360px] object-center"
                          src={`${item.url}`}
                          sizes="100vw"
                          alt="cat picture"
                          width={640}
                          height={360}
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="p-[10px] bottom-[-15px] md:bottom-[-30px] lg:bottom-[-15px] absolute flex items-start gap-[5px] z-10 rounded-[20px] bg-[--background-second-color] dark:bg-[#282828]">
                  {btnInx.map((item, idx) => {
                    return (
                      <button
                        type="button"
                        key={item}
                        id={item.toString()}
                        onClick={onBtnSlideClick}
                        className={`w-[10px] h-[10px] rounded-[10px] ${
                          idx === currentSlide
                            ? "bg-[#FF868E]"
                            : "bg-[#FBE0DC] dark:bg-[--dark-mode-second-bg]"
                        } `}
                      ></button>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col items-center justify-center border-[2px] border-solid rounded-[20px] border-[#FBE0DC] dark:border-[--dark-mode-second-bg] px-[40px] py-[30px] relative">
                <h2 className="absolute top-[-20px] md:top-[-30px] bg-[--background-second-color] dark:bg-[#282828] px-[40px] py-[5px] rounded-[20px] text-[--foreground-second-color] dark:text-[#FFFFFF] text-[20px] md:text-[36px] font-medium">
                  {cat[0].breeds[0].name}
                </h2>
                <p className="text-[16px] md:text-[20px] text-center font-medium mb-[20px]">
                  {cat[0].breeds[0].description}
                </p>
                <div className="flex flex-col md:flex-row items-start gap-[20px]">
                  <p className="max-w-[65%] md:max-w-[50%] text-[16px] ">
                    <span className="font-medium text-[--foreground-second-color] dark:text-[#FFFFFF]">
                      Temperament:
                    </span>{" "}
                    {cat[0].breeds[0].temperament}
                  </p>
                  <div>
                    <p className="text-[16px] mb-[10px]">
                      <span className=" font-medium text-[--foreground-second-color] dark:text-[#FFFFFF]">
                        Origin:
                      </span>{" "}
                      {cat[0].breeds[0].origin}
                    </p>
                    <p className="text-[16px] mb-[10px]">
                      <span className=" font-medium text-[--foreground-second-color] dark:text-[#FFFFFF]">
                        Weight:
                      </span>{" "}
                      {cat[0].breeds[0].weight.metric} kgs
                    </p>
                    <p className="text-[16px] ">
                      <span className=" font-medium text-[--foreground-second-color] dark:text-[#FFFFFF]">
                        Life span:
                      </span>{" "}
                      {cat[0].breeds[0].life_span} years
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </CollectionNav>
  );
};
