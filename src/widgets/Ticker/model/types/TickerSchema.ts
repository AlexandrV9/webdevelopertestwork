import { Instrument } from "shared/types/Enums";

export interface TickerSchema {
  data: {
    instrument: { 
      id: Instrument;
      name: string;
    };
    volume: number;
    maxVolume: number;
    priceBuy: number;
    priceSell: number;
  };
  isLoading: boolean;
  error: string;
}
