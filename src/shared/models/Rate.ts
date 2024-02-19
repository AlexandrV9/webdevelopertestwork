import { Instrument, OrderSide, OrderStatus } from "shared/types/Enums";

export interface Rate {
  id: number;
  creation_time: number;
  change_time: number;
  status: OrderStatus;
  side: OrderSide;
  price: string;
  amount: string;
  instrument: Instrument;
}
