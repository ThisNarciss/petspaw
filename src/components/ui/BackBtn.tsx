import { ArrowLeft } from "@/svg/ArrowRight";
import { useRouter } from "next/router";

interface IProps {
  title: string;
  color?: string;
  bgColor?: string;
}

export const BackBtn = ({
  title,
  color = "#FFFFFF",
  bgColor = "#FF868E",
}: IProps) => {
  const router = useRouter();

  const onBtnClick = () => {
    router.back();
  };

  return (
    <div className="flex gap-[10px]">
      <button
        className="p-[10px] rounded-[10px] text-[#ff868e] bg-[#FBE0DC] hover:bg-[#FF868E] fill-current hover:text-[#FFFFFF]"
        onClick={onBtnClick}
        type="button"
      >
        <ArrowLeft width="20" height="20" />
      </button>
      <div className={`py-[5px] px-[30px] rounded-[10px] bg-[${bgColor}]`}>
        <h2 className={`uppercase text-[${color}] font-medium tracking-[2px]`}>
          {title}
        </h2>
      </div>
    </div>
  );
};
