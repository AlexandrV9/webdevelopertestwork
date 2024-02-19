import Decimal from "decimal.js";
import { createContext } from "react";
import { Instrument, OrderSide } from "shared/types/Enums";

export interface WSContextProps {
  subscribeMarketData?: (instrument: Instrument) => void;
  unsubscribeMarketData?: (subscriptionId: string) => void;
  placeOrder?: (
    pair: Instrument,
    side: OrderSide,
    amount: Decimal,
    price: Decimal
  ) => void;
  getAllRates?: () => void;
}

export const WSContext = createContext<WSContextProps>({});
