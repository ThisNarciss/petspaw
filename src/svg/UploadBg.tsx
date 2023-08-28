import { FC } from "react";

interface IProps {
  width?: string;
  height?: string;
  color?: string;
}

export const UploadBG: FC<IProps> = ({ width = 200, height = 200 }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
    >
      <title>upload-bg</title>
      <path d="M22.4 6.4c-1.767 0-3.2 1.433-3.2 3.2s1.433 3.2 3.2 3.2c1.767 0 3.2-1.433 3.2-3.2s-1.433-3.2-3.2-3.2z"></path>
      <path d="M0 3.2v25.6c0 1.767 1.433 3.2 3.2 3.2h25.6c1.219 0 2.28-0.682 2.82-1.686 0.145-0.269 0.252-0.561 0.315-0.869 0.043-0.208 0.065-0.424 0.065-0.645v-25.6c0-1.767-1.433-3.2-3.2-3.2h-25.6c-1.767 0-3.2 1.433-3.2 3.2zM10.345 6.703l-0.745-0.745-7.467 7.467v-10.225c0-0.589 0.478-1.067 1.067-1.067h25.6c0.589 0 1.067 0.478 1.067 1.067v18.133h-4.892l-14.621-14.621c-0.003-0.003-0.006-0.006-0.009-0.009z"></path>
    </svg>
  );
};
