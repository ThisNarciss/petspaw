import { FC } from "react";

interface IProps {
  width?: string;
  height?: string;
  color?: string;
}

export const SortUp: FC<IProps> = ({ width = 20, height = 20 }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 30 32"
    >
      <title>sort-up</title>
      <path d="M6.4 0.312l-6.4 6.4 1.508 1.508 4.579-4.579v28.358h2.133v-28.358l4.579 4.579 1.508-1.508-6.4-6.4c-0.417-0.417-1.092-0.417-1.508 0zM24.221 2.133c-1.767 0-3.2 1.433-3.2 3.2v3.2h6.4v-3.2c0-1.767-1.433-3.2-3.2-3.2zM27.421 10.667v4.267h2.133v-9.6c0-2.946-2.388-5.333-5.333-5.333s-5.333 2.388-5.333 5.333v9.6h2.133v-4.267h6.4zM18.888 17.067h6.4c2.356 0 4.267 1.91 4.267 4.267 0 1.274-0.559 2.418-1.444 3.2 0.886 0.782 1.444 1.926 1.444 3.2 0 2.356-1.91 4.267-4.267 4.267h-6.4v-14.933zM25.288 23.467c1.178 0 2.133-0.955 2.133-2.133s-0.955-2.133-2.133-2.133h-4.267v4.267h4.267zM21.021 25.6h4.267c1.178 0 2.133 0.955 2.133 2.133s-0.955 2.133-2.133 2.133h-4.267v-4.267z"></path>
    </svg>
  );
};