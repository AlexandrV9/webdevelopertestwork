import { Dispatch } from "@reduxjs/toolkit";
import { RateSchema } from "entities/Rate";

export interface StateSchema {
  rate: RateSchema;
}

export type StateSchemaKey = keyof StateSchema;


export interface ThunkConfig {
  rejectWithValue: string;
  dispatch: Dispatch;
}
