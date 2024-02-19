import { Dispatch } from "@reduxjs/toolkit";
import { RateSchema } from "entities/Rate";
import { TickerSchema } from "widgets/Ticker";

export interface StateSchema {
  rate: RateSchema;
  ticker: TickerSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ThunkConfig {
  rejectWithValue: string;
  dispatch: Dispatch;
}
