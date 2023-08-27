import { FC } from "react";

interface IProps {
  width?: string;
  height?: string;
  color?: string;
}

export const Done: FC<IProps> = ({ width = 20, height = 20 }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 37 32"
    >
      <title>done</title>
      <path
        fill="#97eab9"
        d="M0 16c0-8.837 7.163-16 16-16s16 7.163 16 16c0 8.836-7.164 16-16 16s-16-7.164-16-16zM16 2.133c-7.658 0-13.867 6.208-13.867 13.867s6.208 13.867 13.867 13.867c7.658 0 13.867-6.208 13.867-13.867s-6.208-13.867-13.867-13.867zM24.3 11.333l-9.213 11.516-7.236-6.030 1.366-1.639 5.564 4.637 7.854-9.817 1.666 1.333z"
      ></path>
    </svg>
  );
};
