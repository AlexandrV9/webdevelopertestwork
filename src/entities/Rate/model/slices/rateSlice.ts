import { createSlice } from "@reduxjs/toolkit";

import { RateSchema } from "../types/RateSchema";

const initialState: RateSchema = {
  isLoading: false,
  isSuccess: false,
  data: [],
  error: "",
};

const rateSlice = createSlice({
  name: "rate",
  initialState,
  reducers: {
    
  },
});

export const { actions: rateActions, reducer: rateReducer } = rateSlice;
