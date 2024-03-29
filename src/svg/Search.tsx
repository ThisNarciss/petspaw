import { FC } from "react";

interface IProps {
  width?: string;
  height?: string;
  color?: string;
}

export const Search: FC<IProps> = ({ width = 20, height = 20 }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
    >
      <title>search</title>
      <path d="M30.978 29.147l-7.616-7.921c1.958-2.328 3.031-5.257 3.031-8.306 0-7.124-5.796-12.92-12.92-12.92s-12.92 5.796-12.92 12.92c0 7.124 5.796 12.92 12.92 12.92 2.674 0 5.223-0.807 7.402-2.338l7.674 7.981c0.321 0.333 0.752 0.517 1.214 0.517 0.438 0 0.853-0.167 1.168-0.47 0.67-0.644 0.691-1.713 0.047-2.383zM13.473 3.37c5.266 0 9.55 4.284 9.55 9.55s-4.284 9.55-9.55 9.55-9.55-4.284-9.55-9.55c0-5.266 4.284-9.55 9.55-9.55z"></path>
    </svg>
  );
};
