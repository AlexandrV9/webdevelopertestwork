import { Client } from "mock-socket";
import { createContext } from "react";

export interface WSContextProps {
  client?: Client;
  connect?: () => void;
  disconnect?: () => void;
  send?: (message: string) => void;
  subscribeMarketData?: () => void;
  unsubscribeMarketData?: () => void;
  placeOrder?: (...data: any[]) => void;
}

export const WSContext = createContext<WSContextProps>({});
