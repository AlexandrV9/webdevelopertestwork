import { Client, Server } from "mock-socket";
import { ServerEnvelope } from "shared/models/ServerMessages";
import { ServerMessageType } from "shared/types/Enums";

export class WSServer {
  server: undefined | Server;
  socket: undefined | Client;
  // isStart: boolean;

  constructor(port = 8080) {
    this.server = new Server(`ws://localhost:${port}`, { mock: false });
    this.socket = undefined;
    // this.isStart = false;
  }

  start() {
    // if (!this.isStart) {
    this.server?.on("connection", (socket) => {
      console.log("WebSocket Server is running...");
      this.socket = socket;
      // this.isStart = true;

      socket.on("message", handleOnMessage(socket));
    });
    // }
  }

  stop() {
    console.log("Server is stopped");
    this.socket?.close();
    // this.isStart = false;
  }
}

const handleOnMessage =
  (socket: Client) =>
  (event: string | Blob | ArrayBuffer | ArrayBufferView) => {
    if(typeof event !== "string") {
      socket.send("Сервер принимает только данные в формате string")
    } else {
      const data = JSON.parse(event) as ServerEnvelope;
      console.log(data.messageType);
      console.log(data.message);
      
      switch(data.messageType) {
        default:
          break;
      }
    }

    console.log("Сервер принимает данные");
    console.log(event);
    socket.send(JSON.stringify("Ответ сервера"));
  };
