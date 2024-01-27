import { memo } from "react";
import classNames from "classnames";

import cls from "./AppTableBody.module.scss";

import { Column } from "../../types/Column";
import { Row } from "../../types/Row";
import { AppTableRow } from "../AppTableRow/AppTableRow";

interface AppTableBodyProps<T, V> {
  className?: string;
  columns: T[];
  rows: V[]
}

export const AppTableBody = memo(
  <T extends Column, V extends Row>(props: AppTableBodyProps<T, V>) => {
    const { className, rows, columns } = props;

    return (
      <tbody className={classNames(cls.appTableBody, {}, [className])}>
        {rows.map((row) => (
          <AppTableRow key={row.id} row={row} columns={columns} />
        ))}
      </tbody>
    );
  }
);
