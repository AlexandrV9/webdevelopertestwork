import { generateRateListForTest } from "entities/Rate";
import { Rate } from "shared/models/Rate";
import { Instrument } from "shared/types/Enums";

const testRates = generateRateListForTest(4);

function changeRandomPrice(price: string, range: number): string {
  let randomChange = Math.random() * range * 2 - range;
  return (Number(price) + randomChange).toFixed(5);
}

export interface Asset {
  priceBuy: string;
  priceSell: string;
  maxVolume: number;
}

const assets: Record<Instrument, Asset> = {
  [Instrument.BYN_RUB]: {
    priceBuy: "10.221",
    priceSell: "10.221",
    maxVolume: 1312,
  },
  [Instrument.CNH_RUB]: {
    priceBuy: "10.221",
    priceSell: "10.221",
    maxVolume: 1312,
  },
  [Instrument.EUR_RUB]: {
    priceBuy: "10.221",
    priceSell: "10.221",
    maxVolume: 1312,
  },
  [Instrument.EUR_USD]: {
    priceBuy: "10.221",
    priceSell: "10.221",
    maxVolume: 1312,
  },
  [Instrument.TRY_RUB]: {
    priceBuy: "10.221",
    priceSell: "10.221",
    maxVolume: 1312,
  },
  [Instrument.USD_RUB]: {
    priceBuy: "10.221",
    priceSell: "10.221",
    maxVolume: 1312,
  },
};

export class AppDB {
  rates: Rate[];
  assets: Record<Instrument, Asset>;

  constructor() {
    this.rates = testRates;
    this.assets = assets;
  }

  startPriceFluctuation() {
    Object.values(this.assets).forEach((item) => {
      item.priceBuy = changeRandomPrice(item.priceBuy, 3);
      item.priceSell = changeRandomPrice(item.priceSell, 1);
    });

    // console.log(this.assets);

    // this.rates.forEach((item) => {
    //   item.price = this.assets[item.instrument].priceBuy;
    // });
  }

  getAllRates() {
    return this.rates;
  }

  getAssetByInstrument = (instrument: Instrument) => {
    return this.assets[instrument];
  }

  getRatesByInstrument = (instrument: number) => {
    return this.rates.filter((item) => item.instrument === instrument);
  };

  addRate = async (newRate: Rate) => {
    this.rates.push(newRate);
    return newRate;
  };
}
