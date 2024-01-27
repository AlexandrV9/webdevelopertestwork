import { CSSProperties, ReactNode } from "react";
import { Row } from "./Row";

export interface Column {
  key: string; 
  title: string;
  style?: CSSProperties;
  transformData?: (value: any) => string;
  renderCell?: (row: Row, column: Column) => ReactNode;
}