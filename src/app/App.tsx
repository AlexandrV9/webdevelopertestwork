import React from "react";

import "./styles/index.css";

import { ContractTable } from "widgets/ContractTable";
import { Ticker } from "widgets/Ticker";

export function App() {
  return (
    <div className="App">
      {/* <ContractTable /> */}
      <Ticker />
    </div>
  );
}
