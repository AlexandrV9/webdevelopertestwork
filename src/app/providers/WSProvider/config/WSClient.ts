import Decimal from "decimal.js";
import { WebSocket as FakeSocket } from "mock-socket";
import { ClientMessage } from "shared/models/ClientMessages";
import { ServerEnvelope } from "shared/models/ServerMessages";
import { ClientMessageType, Instrument, OrderSide, ServerMessageType } from "shared/types/Enums";

window.WebSocket = FakeSocket;

export class WSClient {
  client: WebSocket | undefined;

  constructor() {
    this.client = undefined;
  }

  connect = () => {
    this.client = new window.WebSocket("ws://localhost:8080");

    this.client.onclose = () => {
      this.client = undefined;
      console.log("client-onclose");
    };

    this.client.onerror = () => {
      console.log("client-onerror");
    };

    this.client.onopen = () => {
      console.log("Client connected...");
    };

    this.client.onmessage = (event) => {
      console.log("Клиент принимает сообщение от сервера", event);
      // const message: ServerEnvelope = JSON.parse(event.data);
      // switch (message.messageType) {
      //   case ServerMessageType.success:
      //     break;
      //   case ServerMessageType.error:
      //     break;
      //   case ServerMessageType.executionReport:
      //     break;
      //   case ServerMessageType.marketDataUpdate:
      //     break;
      // }
    };
  };

  waitForConnection = (callback: () => void, interval: number) => {
    if (this.client?.readyState === 1) {
      callback();
    } else {
      let self = this;
      setTimeout(function () {
        self.waitForConnection(callback, interval);
      }, interval);
    }
  };

  disconnect = () => {
    this.client?.close();
  };

  send = (message: ClientMessage) => {
    let self = this;
    this.waitForConnection(function () {
      console.log("Отправка данных на сервер");
      self.client?.send(JSON.stringify(message));
    }, 5);
  };

  subscribeMarketData = (instrument: Instrument) => {
    this.send({
      messageType: ClientMessageType.subscribeMarketData,
      message: {
        instrument,
      },
    });
  };

  unsubscribeMarketData = (subscriptionId: string) => {
    this.send({
      messageType: ClientMessageType.unsubscribeMarketData,
      message: {
        subscriptionId,
      },
    });
  };

  placeOrder = (
    instrument: Instrument,
    side: OrderSide,
    amount: Decimal,
    price: Decimal
  ) => {
    this.send({
      messageType: ClientMessageType.placeOrder,
      message: {
        instrument,
        side,
        amount,
        price,
      },
    });
  };
}