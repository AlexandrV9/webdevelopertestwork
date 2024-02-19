import { Rate } from "shared/models/Rate";

const rateItem: Rate = {
  id: 1,
  creation_time: 1706208763356,
  change_time: 1706208771260,
  status: 1,
  side: 1,
  price: "8.559",
  amount: "100 000.00",
  instrument: 1,
};

export const testRateList = [];


export const generateRateListForTest = (count: number): Rate[] => {
  return Array.from({ length: count }, (item, index) => ({
    ...rateItem,
    id: index + 1,
    instrument: index + 1,
    status: 1
  }));
};
