import { memo } from "react";
import classNames from "classnames";

import cls from "./AppTableRow.module.scss";

import { Column } from "../../types/Column";
import { Row } from "../../types/Row";
import { AppTableCell } from "../AppTableCell/AppTableCell";

interface AppTableRowProps<T, V> {
  className?: string;
  isHeader?: boolean;
  columns: T[];
  row?: V;
}

export const AppTableRow = memo(
  <T extends Column, V extends Row>(props: AppTableRowProps<T, V>) => {
    const { className, isHeader = false, columns, row } = props;

    if (isHeader) {
      return (
        <tr className={classNames(cls.appTableRow, {}, [className])}>
          {columns.map((item) => (
            <AppTableCell col={item} row={row} isHeader key={item.key}/>
          ))}
        </tr>
      );
    }

    return (
      <tr className={classNames(cls.appTableRow, {}, [className])}>
        {columns.map((item) => (
          <AppTableCell col={item} row={row} key={`${item.key}-${row?.id}`}/>
        ))}
      </tr>
    );
  }
);
