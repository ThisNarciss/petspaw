import { StylesConfig } from "react-select";

interface IOption {
  readonly value: string;
  readonly label: string;
}

export function styledSelect(width: string) {
  const colorStyles: StylesConfig<IOption> = {
    control: (styles) => ({
      ...styles,
      padding: "3px 8px",
      backgroundColor: "#F8F8F7",
      width,
      color: "#8C8C8C",
      borderRadius: "10px",
      borderWidth: "2px",
      borderColor: "#F8F8F7",
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
      };
    },
    menu: (styles) => {
      return {
        ...styles,
        backgroundColor: "#FFFFFF",
        color: "#8C8C8C",
        border: "none",
        borderRadius: "30px",
      };
    },
    input: (styles) => ({
      ...styles,
      padding: "0",
      margin: "0",
      border: "none",
      color: "#8C8C8C",
    }),
    singleValue: (styles) => ({
      ...styles,
      border: "none",
      color: "#8C8C8C",
      fontSize: "16px",
      lineHeight: "1.5",
      margin: "0",
    }),
    placeholder: (styles) => ({ ...styles }),
    valueContainer: (styles) => ({ ...styles, padding: "0" }),
    indicatorSeparator: (styles) => ({ ...styles, display: "none" }),
    dropdownIndicator: (styles) => ({ ...styles, padding: "0" }),
  };
  return colorStyles;
}
