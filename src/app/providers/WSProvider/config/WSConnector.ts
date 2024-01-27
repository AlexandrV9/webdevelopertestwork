import { WSServer } from "./WSServer";
import { WSClient } from "./WSClient";

export class WSConnector {
  client: WSClient | undefined;
  server: WSServer | undefined;

  constructor() {
    this.server = new WSServer();
    this.client = new WSClient();
  }

  connect() {
    this.server?.start();
    this.client?.connect();
  }

  disconnect() {
    this.server?.stop();
    this.client = undefined;
    this.server = undefined;
  }
}
