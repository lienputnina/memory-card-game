import Cell1 from "../../assets/cSharp.svg";
import Cell2 from "../../assets/c++.svg";
import Cell3 from "../../assets/go.svg";
import Cell4 from "../../assets/javaScript.svg";
import Cell5 from "../../assets/php.svg";
import Cell6 from "../../assets/python.svg";
import Cell7 from "../../assets/rust.svg";
import Cell8 from "../../assets/typescript.svg";

export enum CellType {
  C_SHARP = "cSharp",
  C_PLUS_PLUS = "c++",
  GO = "go",
  JAVASCRIPT = "javaScript",
  PHP = "php",
  PYTHON = "python",
  RUST = "rust",
  TYPESCRIPT = "typescript",
}

export type CellData = {
  id: string;
  image: string;
  type: CellType;
};

/*
1. Added ids to all 8 elements
2. Created enum with their types
3. Created type with the types for cell objects
4. Duplicated first 8 cell objects and added unique ids to them
*/
//todo - auto-generate ids for a shuffle option
export const cellData: CellData[] = [
  {
    id: "1",
    image: Cell1,
    type: CellType.C_SHARP,
  },
  {
    id: "2",
    image: Cell2,
    type: CellType.C_PLUS_PLUS,
  },
  {
    id: "3",
    image: Cell3,
    type: CellType.GO,
  },
  {
    id: "4",
    image: Cell4,
    type: CellType.JAVASCRIPT,
  },
  {
    id: "5",
    image: Cell5,
    type: CellType.PHP,
  },
  {
    id: "6",
    image: Cell6,
    type: CellType.PYTHON,
  },
  {
    id: "7",
    image: Cell7,
    type: CellType.RUST,
  },
  {
    id: "8",
    image: Cell8,
    type: CellType.TYPESCRIPT,
  },
  {
    id: "9",
    image: Cell1,
    type: CellType.C_SHARP,
  },
  {
    id: "10",
    image: Cell2,
    type: CellType.C_PLUS_PLUS,
  },
  {
    id: "11",
    image: Cell3,
    type: CellType.GO,
  },
  {
    id: "12",
    image: Cell4,
    type: CellType.JAVASCRIPT,
  },
  {
    id: "13",
    image: Cell5,
    type: CellType.PHP,
  },
  {
    id: "14",
    image: Cell6,
    type: CellType.PYTHON,
  },
  {
    id: "15",
    image: Cell7,
    type: CellType.RUST,
  },
  {
    id: "16",
    image: Cell8,
    type: CellType.TYPESCRIPT,
  },
];
