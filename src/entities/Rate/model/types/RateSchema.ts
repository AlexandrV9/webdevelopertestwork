import { Rate } from "./Rate";

export interface RateSchema {
  isSuccess: boolean;
  isLoading: boolean;
  error: string;
  data: Rate[];
}