import { Rate } from "shared/models/Rate";

export interface RateSchema {
  isSuccess: boolean;
  isLoading: boolean;
  error: string;
  data: Rate[];
}
