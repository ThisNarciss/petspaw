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
        <div className="cat-container">
          <div className="flex items-center gap-[10px]">
            <BackBtn
              title="Breeds"
              bgColor="bg-[#FBE0DC] dark:bg-[--dark-mode-second-bg]"
              color="#FF868E"
            />
            <div className="cat-id-box">
              <h2 className="cat-id-text">{id}</h2>
            </div>
          </div>
          {Boolean(cat.length) && (
            <div>
              <div className="cat-img-box">
                <ul className="flex">
                  {cat.map((item, index) => {
                    return (
                      <li
                        key={item.id}
                        className={`cat-img-item ${
                          index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <Image
                          className="cat-img"
                          src={`${item.url}`}
                          sizes="100vw"
                          alt="cat picture"
                          width={640}
                          height={360}
                          priority
                        />
                      </li>
                    );
                  })}
                </ul>
                <ul className="cat-btn-list">
                  {btnInx.map((item, idx) => {
                    return (
                      <li key={item} className="flex">
                        <button
                          type="button"
                          id={item.toString()}
                          onClick={onBtnSlideClick}
                          className={`w-[10px] h-[10px] rounded-[10px] ${
                            idx === currentSlide
                              ? "bg-[#FF868E]"
                              : "bg-[#FBE0DC] dark:bg-[--dark-mode-second-bg]"
                          } `}
                        ></button>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="cat-info-box">
                <h2 className="cat-info-title">{cat[0].breeds[0].name}</h2>
                <p className="cat-info-desc">{cat[0].breeds[0].description}</p>
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
