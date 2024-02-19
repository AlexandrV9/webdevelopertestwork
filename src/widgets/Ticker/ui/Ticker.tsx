import classNames from "classnames";
import { FC, memo, useCallback, useEffect, useState } from "react";

import cls from "./Ticker.module.scss";

import Decimal from "decimal.js";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/redux";
import { useAPI } from "shared/lib/hooks/useAPI";
import { OrderSide } from "shared/types/Enums";
import { Button, ButtonTheme } from "shared/ui/Button/ui/Button";
import { Input } from "shared/ui/Input/ui/Input";
import { SelectList, SelectListItem } from "shared/ui/SelectList/SelectList";
import { tickerList } from "../model/consts/tickerList";
import { selectTickerData, tickerActions } from "../model/slice/tickerSlice";

interface TickerProps {
  className?: string;
}

export const Ticker: FC<TickerProps> = memo((props) => {
  const { className } = props;

  const dispatch = useAppDispatch();

  const [inpVolume, setInpVolume] = useState(0);

  const { priceBuy, priceSell, maxVolume, instrument } =
    useSelector(selectTickerData);

  const api = useAPI();

  const handleChangeInstrument = useCallback(
    (instrument: SelectListItem) => {
      dispatch(tickerActions.setInstrument(instrument));
    },
    [dispatch]
  );

  const handleChangeVolume = useCallback((value: string) => {
    const newValue = value.replace(/\D/, "");
    if (Number(newValue) <= maxVolume) {
      setInpVolume(Number(newValue));
    }

    // dispatch(tickerActions.setVolume(newValue));
  }, [maxVolume]);

  const handleClickBtnBuy = useCallback(() => {
    api.placeOrder?.(
      instrument.id,
      OrderSide.BUY,
      new Decimal(maxVolume),
      new Decimal(priceBuy)
    );
    // 
  }, [api, instrument.id, maxVolume, priceBuy]);

  const handleClickBtnSell = useCallback(() => {
    api.placeOrder?.(
      instrument.id,
      OrderSide.SELL,
      new Decimal(maxVolume),
      new Decimal(priceSell)
    );
  }, [api, instrument.id, maxVolume, priceSell]);

  useEffect(() => {
    api.subscribeMarketData?.(instrument.id);
  },[api, instrument.id])

  return (
    <div className={classNames(cls.Ticker, {}, [className])}>
      <SelectList
        value={instrument}
        list={tickerList}
        onChange={handleChangeInstrument}
        className={cls.listCurrencyPair}
      />
      <Input value={maxVolume} placeholder="Max volume" disabled/>
      <Input
        value={inpVolume}
        onChange={handleChangeVolume}
        placeholder="Enter volume"
        className={cls.inpAmount}
      />
      <div className={cls.infoBox}>
        <div className={cls.left}>
          <p>{priceSell}</p>
          <Button
            theme={ButtonTheme.RED}
            fullWidth
            onClick={handleClickBtnSell}
          >
            Sell / Short
          </Button>
        </div>
        <div className={cls.right}>
          <p>{priceBuy}</p>
          <Button
            theme={ButtonTheme.GREEN}
            fullWidth
            onClick={handleClickBtnBuy}
          >
            Buy / Long
          </Button>
        </div>
      </div>
    </div>
  );
});
