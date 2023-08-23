import { ArrowLeft } from "@/svg/ArrowRight";
import { useRouter } from "next/router";

interface IProps {
  title: string;
}

export const BackBtn = ({ title }: IProps) => {
  const router = useRouter();

  const onBtnClick = () => {
    router.back();
  };

  return (
    <div className="flex gap-[10px]">
      <button
        className="p-[10px] rounded-[10px] bg-[#FBE0DC]"
        onClick={onBtnClick}
        type="button"
      >
        <ArrowLeft width="20" height="20" />
      </button>
      <div className="py-[5px] px-[30px] rounded-[10px] bg-[#FF868E]">
        <h2 className="uppercase text-[#FFFFFF] font-medium">{title}</h2>
      </div>
    </div>
  );
};
