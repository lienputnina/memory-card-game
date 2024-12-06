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
  id?: string;
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

const generateRandomID = (length = 6) => {
  return Math.random()
    .toString(36)
    .substring(2, length + 2);
};

export const cellData: CellData[] = [
  {
    id: `${generateRandomID()}`,
    image: Cell1,
    type: CellType.C_SHARP,
  },
  {
    id: `${generateRandomID()}`,
    image: Cell2,
    type: CellType.C_PLUS_PLUS,
  },
  {
    id: `${generateRandomID()}`,
    image: Cell3,
    type: CellType.GO,
  },
  {
    id: `${generateRandomID()}`,
    image: Cell4,
    type: CellType.JAVASCRIPT,
  },
  {
    id: `${generateRandomID()}`,
    image: Cell5,
    type: CellType.PHP,
  },
  {
    id: `${generateRandomID()}`,
    image: Cell6,
    type: CellType.PYTHON,
  },
  {
    id: `${generateRandomID()}`,
    image: Cell7,
    type: CellType.RUST,
  },
  {
    id: `${generateRandomID()}`,
    image: Cell8,
    type: CellType.TYPESCRIPT,
  },
  {
    id: `${generateRandomID()}`,
    image: Cell1,
    type: CellType.C_SHARP,
  },
  {
    id: `${generateRandomID()}`,
    image: Cell2,
    type: CellType.C_PLUS_PLUS,
  },
  {
    id: `${generateRandomID()}`,
    image: Cell3,
    type: CellType.GO,
  },
  {
    id: `${generateRandomID()}`,
    image: Cell4,
    type: CellType.JAVASCRIPT,
  },
  {
    id: `${generateRandomID()}`,
    image: Cell5,
    type: CellType.PHP,
  },
  {
    id: `${generateRandomID()}`,
    image: Cell6,
    type: CellType.PYTHON,
  },
  {
    id: `${generateRandomID()}`,
    image: Cell7,
    type: CellType.RUST,
  },
  {
    id: `${generateRandomID()}`,
    image: Cell8,
    type: CellType.TYPESCRIPT,
  },
];
