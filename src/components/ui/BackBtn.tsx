import { ArrowLeft } from "@/svg/ArrowRight";
import { useRouter } from "next/router";

interface IProps {
  title: string;
  color?: string;
  bgColor?: string;
}

export const BackBtn = ({
  title,
  color = "--foreground-text-color",
  bgColor = "bg-[#FF868E] dark:bg-[#FF868E]",
}: IProps) => {
  const router = useRouter();

  const onBtnClick = () => {
    router.back();
  };

  return (
    <div className="flex gap-[10px]">
      <button className="back-btn" onClick={onBtnClick} type="button">
        <ArrowLeft width="20" height="20" />
      </button>
      <div className={`py-[5px] px-[30px] rounded-[10px] ${bgColor}`}>
        <h2 className={`uppercase text-[${color}] font-medium tracking-[2px]`}>
          {title}
        </h2>
      </div>
    </div>
  );
};
