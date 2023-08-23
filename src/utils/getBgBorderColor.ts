export const getBgColor = (idx: number) => {
  let bgColor = "";
  switch (idx) {
    case 0:
      bgColor = "bg-[#B4B7FF]";

      return bgColor;
    case 1:
      bgColor = "bg-[#97EAB9]";

      return bgColor;
    case 2:
      bgColor = "bg-[#FFD280]";

      return bgColor;

    default:
      bgColor = "bg-[#B4B7FF]";

      return bgColor;
  }
};
