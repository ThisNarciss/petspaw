import { FC } from "react";

interface IProps {
  width?: string;
  height?: string;
  color?: string;
}

export const Favorite: FC<IProps> = ({ width = 30, height = 30 }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 37 32"
    >
      <title>heart-without-bgc</title>
      <path d="M9.934 2.462c-4.127 0-7.472 3.345-7.472 7.472 0 1.982 0.787 3.882 2.189 5.284l13.811 13.811 13.811-13.811c1.401-1.401 2.189-3.302 2.189-5.284 0-4.127-3.345-7.472-7.472-7.472-1.982 0-3.882 0.787-5.284 2.189l-2.374 2.374c-0.481 0.481-1.26 0.481-1.741 0l-2.374-2.374c-1.401-1.401-3.302-2.189-5.284-2.189zM0 9.934c0-5.486 4.447-9.934 9.934-9.934 2.634 0 5.161 1.047 7.024 2.909l1.504 1.504 1.504-1.504c1.863-1.863 4.39-2.909 7.024-2.909 5.486 0 9.934 4.447 9.934 9.934 0 2.634-1.047 5.161-2.91 7.024l-14.682 14.682c-0.481 0.481-1.26 0.481-1.741 0l-14.682-14.682c-1.863-1.863-2.909-4.39-2.909-7.024z"></path>
    </svg>
  );
};
