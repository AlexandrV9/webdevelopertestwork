import { Client, Server } from "mock-socket";
import { ClientEnvelope } from "shared/models/ClientMessages";
import { ClientMessageType, ServerMessageType } from "shared/types/Enums";
import { AppDB } from "./db/db";
import { handlePlaceOrder } from "./serverMethods/handlePlaceOrder";
import { handleSubscribeMarketData } from "./serverMethods/handleSubscribeMarketData";
import { handleSubscribeAsset } from "./serverMethods/handleSubscribeAsset";

const db = new AppDB();

db.startPriceFluctuation();

export class WSServer {
  server: undefined | Server;
  socket: undefined | Client;

  constructor() {
    this.server = undefined;
    this.socket = undefined;
  }

  start() {
    this.server = new Server(`ws://localhost:8080`, { mock: false });
    this.server?.on("connection", (socket) => {
      console.log("WebSocket Server is running...");
      this.socket = socket;

      socket.on(
        "message",
        (event: string | Blob | ArrayBuffer | ArrayBufferView) => {
          if (typeof event !== "string") {
            socket.send("Сервер принимает только данные в формате string");
          } else {
            const data = JSON.parse(event) as ClientEnvelope;

            switch (data.messageType) {
              // Клиент отправил запрос на создание заяввки
              case ClientMessageType.placeOrder:
                handlePlaceOrder(socket, data, db);
                break;
              // Клиент захотед подписаться на обновление данных
              case ClientMessageType.subscribeMarketData:
                handleSubscribeMarketData(socket, db, data);
                break;
              // /Клиент захотел отпсаться от обновления данных
              case ClientMessageType.unsubscribeMarketData:
                break;
              case ClientMessageType.subscribeAssetData:
                handleSubscribeAsset(socket, db, data);
                break;
              default:
                socket.send(JSON.stringify("Ответ сервера"));
                break;
            }
          }
        }
      );

      // setInterval(() => {
      //   db.startPriceFluctuation();
      //   socket.send(
      //     JSON.stringify({
      //       messageType: ServerMessageType.getAllRates,
      //       message: db.getAllRates(),
      //     })
      //   );
      //   socket.send(
      //     JSON.stringify({
      //       messageType: ServerMessageType.assetDataUpdate,
      //       message: db.assets,
      //     })
      //   );
      // }, 5000);
    });
  }

  stop() {
    console.log("Server is stopped");
    this.server?.close();
  }
}
