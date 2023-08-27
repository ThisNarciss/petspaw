import { FC } from "react";

interface IProps {
  width?: string;
  height?: string;
  color?: string;
}

export const Cross: FC<IProps> = ({ width = 17, height = 17 }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
    >
      <title>cross</title>
      <path d="M14.323 16l-13.384-13.384 1.676-1.676 13.384 13.384 13.384-13.384 1.676 1.676-13.384 13.384 13.384 13.384-1.676 1.676-13.384-13.384-13.384 13.384-1.676-1.676 13.384-13.384z"></path>
    </svg>
  );
};
