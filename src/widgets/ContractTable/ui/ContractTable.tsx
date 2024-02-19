import { FC, useEffect } from "react";

import cls from "./ContractTable.module.scss";

import { columns } from "./conts/columns";

import { AppTable } from "shared/ui/AppTable";
import { useSelector } from "react-redux";
import { selectRateList } from "entities/Rate";

export const ContractTable: FC = () => {

  const list = useSelector(selectRateList);

  return (
    <AppTable
      columns={columns}
      rows={list}
      className={cls.contractTable}
    />
  );
};
