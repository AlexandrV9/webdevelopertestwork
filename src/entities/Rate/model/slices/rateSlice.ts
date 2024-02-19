import { createSlice } from "@reduxjs/toolkit";

import { RateSchema } from "../types/RateSchema";

const initialState: RateSchema = {
  isLoading: false,
  isSuccess: false,
  list: [],
  error: "",
};

const rateSlice = createSlice({
  name: "rate",
  initialState,
  reducers: {
    setList: (state, action) => {
      state.list = action.payload;
    },
    addList: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { actions: rateActions, reducer: rateReducer } = rateSlice;
