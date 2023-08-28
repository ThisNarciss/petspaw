import { FC } from "react";
import { ColorRing } from "react-loader-spinner";

interface IProps {
  width?: string;
  height?: string;
}

export const Loader: FC<IProps> = ({ width = 80, height = 80 }) => {
  return (
    <ColorRing
      visible={true}
      height={height}
      width={width}
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
    />
  );
};
