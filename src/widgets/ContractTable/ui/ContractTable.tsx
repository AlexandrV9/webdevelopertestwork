import { FC } from "react";

import cls from "./ContractTable.module.scss";

import { columns } from "./conts/columns";

import { generateRateListForTest } from "entities/Rate";
import { AppTable } from "shared/ui/AppTable";

export const ContractTable: FC = () => {
  const list = generateRateListForTest(4);

  return (
    <AppTable
      columns={columns}
      rows={list}
      className={cls.contractTable}
    />
  );
};
