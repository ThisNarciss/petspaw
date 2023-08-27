import { FC } from "react";

interface IProps {
  width?: string;
  height?: string;
  color?: string;
}

export const Upload: FC<IProps> = ({ width = 16, height = 16 }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
    >
      <title>upload</title>
      <path d="M15.732 0l8.739 8.067-1.645 1.782-5.847-5.398v20.272h-2.425v-20.114l-5.206 5.206-1.715-1.715 8.1-8.1zM2.425 29.575v-14.553h-2.425v16.978h31.531v-16.978h-2.425v14.553h-26.68z"></path>
    </svg>
  );
};
