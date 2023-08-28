import { FC } from "react";

interface IProps {
  width?: string;
  height?: string;
  color?: string;
}

export const Burger: FC<IProps> = ({ width = 30, height = 18 }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 52 32"
    >
      <title>burger</title>
      <path d="M53.333 3.556h-53.333v-3.556h53.333v3.556zM53.333 17.778h-53.333v-3.556h53.333v3.556zM53.333 32h-53.333v-3.556h53.333v3.556z"></path>
    </svg>
  );
};
