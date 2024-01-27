import { Fragment, memo } from "react";
import classNames from "classnames";

import cls from "./AppTableCell.module.scss";

import { Column } from "../../types/Column";
import { Row } from "../../types/Row";

interface AppTableCellProps<T, V> {
  className?: string;
  col: T;
  row?: V;
  isHeader?: boolean;
}

export const AppTableCell = memo(
  <T extends Column, V extends Row>(props: AppTableCellProps<T, V>) => {
    const { className, col, row, isHeader = false } = props;

    if (isHeader) {
      return (
        <th
          className={classNames(cls.appTableCell, { [cls.header]: true }, [
            className,
          ])}
          style={col.style}
        >
          {col.title}
        </th>
      );
    }

    if (!row) {
      return null;
    }

    return (
      <td
        className={classNames(cls.appTableCell, {}, [className])}
        style={col.style}
      >
        {col.transformData ? col.transformData(row[col.key]) : row[col.key]}
      </td>
    );
  }
);
