import { FC } from "react";

interface IProps {
  width?: string;
  height?: string;
  color?: string;
}

export const Reload: FC<IProps> = ({ width = 18, height = 20 }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
    >
      <title>reload</title>
      <path d="M13.571 4l-2.477-2.475 1.524-1.525 5.074 5.071-5.074 5.071-1.524-1.525 2.461-2.46c-6.336 0.24-11.4 5.451-11.4 11.839 0 6.541 5.309 11.848 11.856 11.848s11.856-5.307 11.856-11.848v-1.078h2.156v1.078c0 7.733-6.276 14.004-14.012 14.004s-14.012-6.27-14.012-14.004c0-7.586 6.038-13.764 13.571-13.997z"></path>
    </svg>
  );
};
