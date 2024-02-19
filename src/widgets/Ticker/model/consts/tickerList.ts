import { currencyPairs } from "shared/consts/currencyPairs";
import { RecordCurrencyPairs } from "shared/types/Records";

export const tickerList = currencyPairs.map((item) => ({
  id: item,
  name: RecordCurrencyPairs[item].name,
}));