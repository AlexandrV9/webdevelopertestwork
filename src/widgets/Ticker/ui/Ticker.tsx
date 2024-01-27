import { FC, memo, useCallback, useContext, useState } from "react";
import classNames from "classnames";

import cls from "./Ticker.module.scss";
import { SelectList } from "shared/ui/SelectList/SelectList";
import { Input } from "shared/ui/Input/ui/Input";
import { Button, ButtonTheme } from "shared/ui/Button/ui/Button";
import { formatAmount } from "shared/lib/common/formatAmount";
import { WSContext } from "app/providers/WSProvider/config/WSContext";

interface TickerProps {
  className?: string;
}

const currencyPairs = [
  { id: 1, name: "CNH / RUB" },
  { id: 2, name: "EUR / RUB" },
  { id: 3, name: "EUR / USD" },
  { id: 4, name: "USD / RUB" },
  { id: 5, name: "TRY / RUB" },
  { id: 6, name: "BYN / RUB" },
];

export const Ticker: FC<TickerProps> = memo((props) => {
  const { className } = props;

  const [selectCurrencyPair, setSelectCurrencyPair] = useState(
    currencyPairs[0]
  );

  const buyPrice = 8.559;

  const { placeOrder } = useContext(WSContext);

  const [amount, setAmount] = useState(1000000);

  const handleChangeAmount = useCallback((value: string) => {
    const newValue = value.replace(/\D/, "") || "0";
    setAmount(parseInt(newValue));
  }, []);

  const handleClickBtnBuy = useCallback(() => {
    placeOrder?.(selectCurrencyPair, "Buy", amount, buyPrice);
  }, [amount, placeOrder, selectCurrencyPair]);

  return (
    <div className={classNames(cls.Ticker, {}, [className])}>
      <SelectList
        value={selectCurrencyPair}
        list={currencyPairs}
        onChange={setSelectCurrencyPair}
        className={cls.listCurrencyPair}
      />
      <Input
        value={amount}
        onChange={handleChangeAmount}
        placeholder="Enter amount"
        className={cls.inpAmount}
      />
      <div className={cls.infoBox}>
        <div className={cls.left}>
          <p>8.558</p>
          <Button theme={ButtonTheme.RED} fullWidth>
            Sell / Short
          </Button>
        </div>
        <div className={cls.right}>
          <p>8.559</p>
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
