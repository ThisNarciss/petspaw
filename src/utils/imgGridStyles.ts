const styles = [
  "col-start-1 row-start-1 row-end-3",
  "col-start-2 row-start-1",
  "col-start-3 row-start-1",
  "col-start-2 col-end-4 row-start-2 row-end-4",
  "col-start-1 row-start-3",
  "col-start-1 row-start-4",
  "col-start-2 row-start-4",
  "col-start-3 row-start-4 row-end-6",
  "col-start-1 col-end-3 row-start-5 row-end-7",
  "col-start-3 row-start-6 ",
  "col-start-3 row-start-7 ",
  "col-start-2 row-start-7",
  "col-start-1 row-start-7 row-end-9",
  "col-start-2 col-end-4 row-start-8 row-end-10",
  "col-start-1 row-start-9",
  "col-start-1 row-start-10",
  "col-start-2 row-start-10",
  "col-start-3 row-start-10 row-end-12",
  "col-start-1 col-end-3 row-start-11 row-end-13",
  "col-start-3 row-start-12",
];

export const imgGridStyles = (arrLength: number, idx: number) => {
  if (arrLength > 0 && idx === 0) {
    return styles[0];
  }
  if (arrLength > 1 && idx === 1) {
    return styles[1];
  }
  if (arrLength > 2 && idx === 2) {
    return styles[2];
  }
  if (arrLength > 3 && idx === 3) {
    return styles[3];
  }
  if (arrLength > 4 && idx === 4) {
    return styles[4];
  }
  if (arrLength > 5 && idx === 5) {
    return styles[5];
  }
  if (arrLength > 6 && idx === 6) {
    return styles[6];
  }
  if (arrLength > 7 && idx === 7) {
    return styles[7];
  }
  if (arrLength > 8 && idx === 8) {
    return styles[8];
  }
  if (arrLength > 9 && idx === 9) {
    return styles[9];
  }
  if (arrLength > 10 && idx === 10) {
    return styles[10];
  }
  if (arrLength > 11 && idx === 11) {
    return styles[11];
  }
  if (arrLength > 12 && idx === 12) {
    return styles[12];
  }
  if (arrLength > 13 && idx === 13) {
    return styles[13];
  }
  if (arrLength > 14 && idx === 14) {
    return styles[14];
  }
  if (arrLength > 15 && idx === 15) {
    return styles[15];
  }
  if (arrLength > 16 && idx === 16) {
    return styles[16];
  }
  if (arrLength > 17 && idx === 17) {
    return styles[17];
  }
  if (arrLength > 18 && idx === 18) {
    return styles[18];
  }
  if (arrLength > 19 && idx === 19) {
    return styles[19];
  }
};
