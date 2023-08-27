import { FC } from "react";

interface IProps {
  width?: string;
  height?: string;
  color?: string;
}

export const Error: FC<IProps> = ({ width = 20, height = 20 }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 37 32"
    >
      <title>error</title>
      <path
        fill="#ff868e"
        d="M0 16c0-8.837 7.163-16 16-16s16 7.163 16 16c0 8.836-7.164 16-16 16s-16-7.164-16-16zM16 2.133c-7.658 0-13.867 6.208-13.867 13.867s6.208 13.867 13.867 13.867c7.658 0 13.867-6.208 13.867-13.867s-6.208-13.867-13.867-13.867zM14.492 16l-5.646-5.646 1.508-1.508 5.646 5.646 5.646-5.646 1.508 1.508-5.646 5.646 5.646 5.646-1.508 1.508-5.646-5.646-5.646 5.646-1.508-1.508 5.646-5.646z"
      ></path>
    </svg>
  );
};
