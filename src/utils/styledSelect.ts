import { StylesConfig } from "react-select";

interface IOption {
  readonly value: string;
  readonly label: string;
}
interface IParams {
  color?: string;
  bgColor?: string;
  borderColor?: string;
}

export function styledSelect({
  bgColor = "#F8F8F7",
  color = "#8C8C8C",
  borderColor = "#F8F8F7",
}: IParams) {
  const colorStyles: StylesConfig<IOption> = {
    control: (styles) => ({
      ...styles,
      padding: "6px 8px",
      backgroundColor: bgColor,
      width: "100%",
      color,
      borderRadius: "10px",
      borderWidth: "2px",
      borderColor,
      borderStyle: "solid",
      ":hover": {
        ...styles[":hover"],
        borderColor: "#FBE0DC",
      },
    }),

    option: (styles) => {
      return {
        ...styles,
        backgroundColor: "#FFFFFF",
        color: "#8C8C8C",
        border: "none",
        borderRadius: "30px",
        fontSize: "16px",
        textTransform: "none",
      };
    },
    menu: (styles) => {
      return {
        ...styles,
        backgroundColor: "#FFFFFF",
        color: "#8C8C8C",
        border: "none",
        borderRadius: "30px",
        padding: "8px",
      };
    },
    input: (styles) => ({
      ...styles,
      padding: "0",
      margin: "0",
      border: "none",
      fontSize: "16px",
      color,
    }),
    singleValue: (styles) => ({
      ...styles,
      border: "none",
      color,
      fontSize: "16px",
      lineHeight: "1.5",
      margin: "0",
      textTransform: "none",
    }),
    placeholder: (styles) => ({ ...styles }),
    valueContainer: (styles) => ({ ...styles, padding: "0" }),
    indicatorSeparator: (styles) => ({ ...styles, display: "none" }),
    dropdownIndicator: (styles) => ({ ...styles, padding: "0" }),
  };
  return colorStyles;
}
