import { useEffect, useRef, useState } from "react";
import { wsConnector } from "../config/WSConnector";
import { WSClient } from "../config/WSClient";
import { Instrument, OrderSide, ServerMessageType } from "shared/types/Enums";
import Decimal from "decimal.js";
import { ServerEnvelope } from "shared/models/ServerMessages";
import { useAppDispatch } from "shared/lib/hooks/redux";
import { rateActions } from "entities/Rate";
import { tickerActions } from "widgets/Ticker";

interface ResUseUseWSConnect {
  isConnect: boolean;
  API?: {
    subscribeMarketData?: (instrument: Instrument) => void;
    unsubscribeMarketData?: (subscriptionId: string) => void;
    placeOrder?: (
      pair: Instrument,
      side: OrderSide,
      amount: Decimal,
      price: Decimal
    ) => void;
    getAllRates: () => void;
  };
}

export function useWSConnect(): ResUseUseWSConnect {
  const socketRef = useRef<WSClient>();
  const [isConnect, setIsConnect] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    wsConnector.connect();
    socketRef.current = wsConnector.client;

    setIsConnect(true);

    if (socketRef?.current?.client) {
      socketRef.current.client.onmessage = (event) => {
        const data: ServerEnvelope = JSON.parse(event.data);

        switch (data.messageType) {
          case ServerMessageType.executionReport: // отчёт об статусе
            break;
          case ServerMessageType.marketDataUpdate:
            dispatch(tickerActions.updateTickerData(data.message));
            break;
          case ServerMessageType.success: // Заявка создана - ответ на SubscribeMarketData (появл в таблице)
            dispatch(rateActions.addList(data.message));
            break;
          case ServerMessageType.error: // Возникли какие-то ошибки
            break;
          case ServerMessageType.getAllRates:
            dispatch(rateActions.setList(data.message));
            break;
          case ServerMessageType.assetDataUpdate:
            dispatch(tickerActions.updateTickerData(data.message))
            break;
          default:
            break;
        }
        // alert(JSON.stringify(data.message));
      };
    }
  }, [dispatch]);

  if (socketRef.current) {
    const {
      placeOrder,
      subscribeMarketData,
      unsubscribeMarketData,
      getAllRates,
    } = socketRef.current;

    return {
      isConnect,
      API: {
        placeOrder,
        subscribeMarketData,
        unsubscribeMarketData,
        getAllRates,
      },
    };
  } else {
    return {
      isConnect: true,
      API: undefined,
    };
  }
}
