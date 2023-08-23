import { FC } from "react";

interface IProps {
  width?: string;
  height?: string;
  color?: string;
}

export const ArrowLeft: FC<IProps> = ({
  width = 19,
  height = 32,
  color = "#ff868e",
}) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 19 32"
    >
      <title>arrow-left</title>
      <path
        fill={color}
        d="M1.136 17.584l13.759 13.759c0.875 0.876 2.294 0.876 3.169 0s0.875-2.294 0-3.169l-12.175-12.175 12.175-12.174c0.875-0.875 0.875-2.294 0-3.169s-2.294-0.875-3.169 0l-13.76 13.759c-0.437 0.438-0.656 1.011-0.656 1.584s0.219 1.147 0.656 1.584z"
      ></path>
    </svg>
  );
};
