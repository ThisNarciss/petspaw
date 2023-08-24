import { FC } from "react";

interface IProps {
  width?: string;
  height?: string;
  color?: string;
}

export const FavoriteFill: FC<IProps> = ({ width = 30, height = 30 }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 36 32"
    >
      <title>heart</title>
      <path d="M9.566 0c-5.283 0-9.566 4.283-9.566 9.566 0 2.537 1.008 4.97 2.802 6.764l14.138 14.138c0.463 0.463 1.213 0.463 1.676 0l14.138-14.138c1.794-1.794 2.802-4.227 2.802-6.764 0-5.283-4.283-9.566-9.566-9.566-2.537 0-4.97 1.008-6.764 2.802l-1.448 1.448-1.448-1.448c-1.794-1.794-4.227-2.802-6.764-2.802z"></path>
    </svg>
  );
};
