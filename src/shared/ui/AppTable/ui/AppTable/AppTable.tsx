import { memo } from "react";
import classNames from "classnames";

import cls from "./AppTable.module.scss";

import { Column } from "../../types/Column";
import { AppTableHeader } from "../AppTableHeader/AppTableHeader";
import { AppTableBody } from "../AppTableBody/AppTableBody";
import { Row } from "../../types/Row";
import { AppTablePagination } from "../AppTablePagination/AppTablePagination";

interface AppTableProps<T, V> {
  className?: string;
  columns: T[];
  rows?: V[];
  isPagination?: boolean;
}

export const AppTable = memo(
  <T extends Column, V extends Row>(props: AppTableProps<T, V>) => {
    const { className, columns, rows, isPagination = false } = props;

    return (
      <div className={classNames(cls.appTableWrapper, {})}>
        <table className={classNames(cls.appTable, {}, [className])}>
          <AppTableHeader columns={columns} />
          {rows && <AppTableBody columns={columns} rows={rows} />}
        </table>
        {isPagination && <AppTablePagination />}
      </div>
    );
  }
);
