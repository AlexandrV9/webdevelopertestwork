import { StateSchema } from "app/providers/StoreProvider";

export const selectRateList = (state: StateSchema) => state.rate.list;
