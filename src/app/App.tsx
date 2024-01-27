import React from "react";
import { Ticker } from "../widgets/Ticker";

import "./styles/index.css";

import { ContractTable } from "widgets/ContractTable";

export function App() {
  return (
    <div className="App">
      <ContractTable />
      <Ticker />
    </div>
  );
}
