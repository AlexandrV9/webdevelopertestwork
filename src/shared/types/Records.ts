import { Instrument, OrderSide, OrderStatus } from "./Enums";

export const RecordCurrencyPairs: Record<Instrument, { name: string }> = {
  [Instrument.BYN_RUB]: { name: "CNH / RUB" },
  [Instrument.CNH_RUB]: { name: "BYN / RUB" },
  [Instrument.EUR_RUB]: { name: "EUR / RUB" },
  [Instrument.EUR_USD]: { name: "EUR / USD" },
  [Instrument.TRY_RUB]: { name: "TRY / RUB" },
  [Instrument.USD_RUB]: { name: "USD / RUB" },
};

export const RecordRateStatus: Record<OrderStatus, string> = {
  [OrderStatus.ACTIVE]: "Active",
  [OrderStatus.CANCELLED]: "Cancelled",
  [OrderStatus.FILLED]: "Filled",
  [OrderStatus.REJECTED]: "Rejected",
};

export const RecordOrderSite: Record<OrderSide, string> = {
  [OrderSide.BUY]: "Buy",
  [OrderSide.SELL]: "Sell",
};
