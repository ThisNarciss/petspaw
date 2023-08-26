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

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cat.length) % cat.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cat.length);
  };

  const onBtnSlideClick = (e: MouseEvent<HTMLButtonElement>) => {
    const id = Number(e.currentTarget.id);
    setCurrentSlide(Number(id));
  };

  const {
    query: { id },
  } = useRouter();

  useEffect(() => {
    (async () => {
      const breed = await CatServices.getBreedsById(id);
      setCat(breed);
    })();
  }, [id]);

  if (!cat?.length) {
    return;
  }

  return (
    <CollectionNav>
      <section className=" w-full">
        <div className="p-[20px] bg-[#FFFFFF] rounded-[20px] flex flex-col gap-[20px]">
          <div className="flex items-center gap-[10px]">
            <BackBtn title="Breeds" bgColor="#FBE0DC" color="#FF868E" />
            <div className="py-[5px] px-[30px] rounded-[10px] bg-[#FF868E]">
              <h2 className="uppercase text-[#FFFFFF] font-medium tracking-[2px]">
                id
              </h2>
            </div>
          </div>
          {Boolean(cat?.length) && (
            <div>
              <div className="w-[640px] flex  justify-center h-[360px] mb-[50px] relative">
                <div className="flex">
                  {cat.map((item, index) => {
                    return (
                      <div
                        key={item.id}
                        className={`rounded-[20px] overflow-hidden  w-[640px] h-[360px] absolute top-0 left-0 ${
                          index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <Image
                          className="object-cover w-[640px] h-[360px] object-center"
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
                <div className="p-[10px] bottom-[-15px] absolute flex items-start gap-[5px] z-10 rounded-[20px] bg-[#FFFFFF]">
                  {btnInx.map((item, idx) => {
                    return (
                      <button
                        key={item}
                        id={item.toString()}
                        onClick={onBtnSlideClick}
                        className={`w-[10px] h-[10px] rounded-[10px] ${
                          idx === currentSlide ? "bg-[#FF868E]" : "bg-[#FBE0DC]"
                        } `}
                      ></button>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col items-center justify-center border-[2px] border-solid rounded-[20px] border-[#FBE0DC] px-[40px] py-[30px] relative">
                <h2 className="absolute top-[-30px] bg-[#FFFFFF] px-[40px] py-[5px] rounder-[20px] text-[#1D1D1D] text-[36px] font-medium">
                  {cat[0].breeds[0].name}
                </h2>
                <p className="text-center font-medium mb-[20px]">
                  {cat[0].breeds[0].description}
                </p>
                <div className="flex items-start">
                  <p className="max-w-[50%] text-[16px] ">
                    <span className="font-medium text-[#1D1D1D]">
                      Temperament:
                    </span>{" "}
                    {cat[0].breeds[0].temperament}
                  </p>
                  <div>
                    <p className="text-[16px] ">
                      <span className=" font-medium text-[#1D1D1D]">
                        Origin:
                      </span>{" "}
                      {cat[0].breeds[0].origin}
                    </p>
                    <p className="text-[16px] ">
                      <span className=" font-medium text-[#1D1D1D]">
                        Weight:
                      </span>{" "}
                      {cat[0].breeds[0].weight.metric}
                    </p>
                    <p className="text-[16px] ">
                      <span className=" font-medium text-[#1D1D1D]">
                        Life span:
                      </span>{" "}
                      {cat[0].breeds[0].life_span}
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