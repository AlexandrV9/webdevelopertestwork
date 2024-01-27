import { WSServer } from "./WSServer";
import { WSClient } from "./WSClient";

// const server = new WSServer();

export class WSConnector {
  client: WSClient | undefined;
  server: WSServer | undefined;

  constructor() {
    this.server = new WSServer();
    this.client = new WSClient();
  }

  connect() {
    // if (!this.server?.isStart) {
      // this.server?.start();
    // }
    this.server?.start();
    this.client?.connect();
  }

  disconnect() {
    this.server?.stop();
    this.client = undefined;
    this.server = undefined;
  }
}
