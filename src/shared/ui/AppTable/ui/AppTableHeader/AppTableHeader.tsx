import { Column } from "../../types/Column";
import { AppTableRow } from "../AppTableRow/AppTableRow";

import cls from "./AppTableHeader.module.scss";

interface HeaderTableProps<T> {
  columns: T[];
}

export const AppTableHeader = <T extends Column>(props: HeaderTableProps<T>) => {
  const { columns } = props;

  return (
    <thead className={cls.ppTableHeader}>
      <AppTableRow columns={columns} isHeader />
    </thead>
  );
};


