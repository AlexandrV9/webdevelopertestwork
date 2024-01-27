import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { rateReducer } from "entities/Rate";

export function createReduxStore() {
  const rootReducer = combineReducers({
    rate: rateReducer,
  });

  const store = configureStore({
    reducer: rootReducer,
  });
  return store;
}

export type StateSchema = ReturnType<typeof createReduxStore>;
export type AppDispatch = StateSchema["dispatch"];
