import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { rateReducer } from "entities/Rate";
import { tickerReducer } from "widgets/Ticker";

export function createReduxStore() {
  const rootReducer = combineReducers({
    rate: rateReducer,
    ticker: tickerReducer,
  });

  const store = configureStore({
    reducer: rootReducer,
  });
  return store;
}

export type StateSchema = ReturnType<typeof createReduxStore>;
export type AppDispatch = StateSchema["dispatch"];
