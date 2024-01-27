import { Client } from "mock-socket";
import { createContext } from "react";
import { CurrencyPair } from "shared/models/CurrencyPair";
import { OrderSide } from "shared/types/Enums";

export interface WSContextProps {
  client?: Client;
  connect?: () => void;
  disconnect?: () => void;
  send?: (message: string) => void;
  subscribeMarketData?: () => void;
  unsubscribeMarketData?: () => void;
  placeOrder?: (
    pair: CurrencyPair,
    side: OrderSide,
    amount: number,
    price: number
  ) => void;
}

export const WSContext = createContext<WSContextProps>({});
