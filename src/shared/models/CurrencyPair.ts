import { Instrument } from "shared/types/Enums";

export interface CurrencyPair {
  id: string | number;
  instrument: Instrument;
}
