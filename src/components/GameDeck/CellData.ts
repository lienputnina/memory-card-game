import Cell1 from "../../assets/cSharp.svg";
import Cell2 from "../../assets/c++.svg";
import Cell3 from "../../assets/go.svg";
import Cell4 from "../../assets/javaScript.svg";
import Cell5 from "../../assets/php.svg";
import Cell6 from "../../assets/python.svg";
import Cell7 from "../../assets/rust.svg";
import Cell8 from "../../assets/typescript.svg";

const CellData = [
  {
    image: Cell1,
  },
  {
    image: Cell2,
  },

  {
    image: Cell3,
  },

  {
    image: Cell4,
  },

  {
    image: Cell5,
  },

  {
    image: Cell6,
  },

  {
    image: Cell7,
  },

  {
    image: Cell8,
  },
];

export const ExtendedCellData = [...CellData, ...CellData];

export default ExtendedCellData;
