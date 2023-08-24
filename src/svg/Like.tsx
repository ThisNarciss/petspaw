import { FC } from "react";

interface IProps {
  width?: string;
  height?: string;
  color?: string;
}

export const Like: FC<IProps> = ({
  width = 30,
  height = 30,
  
}) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
    >
      <title>like</title>
      <path
        
        d="M0 16c0-8.837 7.163-16 16-16s16 7.163 16 16c0 8.837-7.163 16-16 16s-16-7.163-16-16zM16 2.133c-7.658 0-13.867 6.208-13.867 13.867s6.208 13.867 13.867 13.867c7.658 0 13.867-6.208 13.867-13.867s-6.208-13.867-13.867-13.867zM10.667 12.8h-2.133v-2.133h2.133v2.133zM23.467 12.8h-2.133v-2.133h2.133v2.133zM9.813 17.707l0.64 0.853c2.773 3.698 8.32 3.698 11.093 0l0.64-0.853 1.707 1.28-0.64 0.853c-3.627 4.836-10.88 4.836-14.507 0l-0.64-0.853 1.707-1.28z"
      ></path>
    </svg>
  );
};
