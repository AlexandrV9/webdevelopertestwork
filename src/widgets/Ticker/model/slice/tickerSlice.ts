import { createSlice } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { TickerSchema } from "../types/TickerSchema";
import { tickerList } from "../consts/tickerList";

const initialState: TickerSchema = {
  data: {
    instrument: tickerList[0],
    volume: 0,
    maxVolume: 0,
    priceBuy: 0,
    priceSell: 0,
  },
  isLoading: false,
  error: "",
};

const tickerSlice = createSlice({
  name: "ticker",
  initialState,
  reducers: {
    updateTickerData: (state, action) => {
      const { maxVolume, priceBuy, priceSell } = action.payload;
      state.data.priceBuy = priceSell;
      state.data.priceSell = priceBuy;
      state.data.maxVolume = maxVolume
    },
    setInstrument: (state, action) => {
      state.data.instrument = action.payload;
    },
    setVolume: (state, action) => {
      state.data.volume = action.payload;
    },
  },
});

export const { actions: tickerActions, reducer: tickerReducer } = tickerSlice;

export const selectTickerData = (state: StateSchema) => state.ticker.data;
