import { CSSProperties } from "react";
import { formatTimestamp } from "shared/lib/common/formatTimestamp";

export enum ListShowColumns {
  ID = "id",
  CREATION_TIME = "creation_time",
  CHANGE_TIME = "change_time",
  STATUS = "status",
  SIDE = "side",
  PRICE = "price",
  AMOUNT = "amount",
  INSTRUMENT = "instrument",
}

export const columns: {
  title: string;
  key: ListShowColumns;
  style: CSSProperties;
  transformData?: (value: any) => string;
}[] = [
  {
    title: "ID",
    key: ListShowColumns.ID,
    style: { width: "20px", display: "flex", justifyContent: "center" },
  },
  {
    title: "Сreation time",
    key: ListShowColumns.CREATION_TIME,
    style: { width: "220px", display: "flex", justifyContent: "center" },
    transformData: (value) => formatTimestamp(value)
  },
  {
    title: "Сhange time",
    key: ListShowColumns.CHANGE_TIME,
    style: { width: "140px", display: "flex", justifyContent: "center" },
  },
  {
    title: "Status",
    key: ListShowColumns.STATUS,
    style: { width: "100px", display: "flex", justifyContent: "center" },
  },
  {
    title: "Side",
    key: ListShowColumns.SIDE,
    style: { width: "100px", display: "flex", justifyContent: "center" },
  },
  {
    title: "Price",
    key: ListShowColumns.PRICE,
    style: { width: "100px", display: "flex", justifyContent: "center" },
  },
  {
    title: "Amount",
    key: ListShowColumns.AMOUNT,
    style: { width: "150px", display: "flex", justifyContent: "center" },
  },
  {
    title: "Instrument",
    key: ListShowColumns.INSTRUMENT,
    style: { width: "100px", display: "flex", justifyContent: "center" },
  },
];
