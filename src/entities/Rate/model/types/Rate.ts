export interface Rate {
  id: number;
  creation_time: number;
  change_time: number;
  status: RateStatus;
  side: Side;
  price: string;
  amount: string;
  instrument: string;
}

export type RateStatus = "ACTIVE" | "FILLED" | "REJECTED" | "CANCELLED";

export type Side = "Buy" | "Sell";
