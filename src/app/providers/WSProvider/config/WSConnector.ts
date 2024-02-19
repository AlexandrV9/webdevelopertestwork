import { WSServer } from "./WSServer";
import { WSClient } from "./WSClient";

const wsServer = new WSServer();
wsServer.start();

class WSConnector {
  client: WSClient | undefined;

  constructor() {
    this.client = new WSClient();
  }

  connect() {
    this.client?.connect();
  }
}

export const wsConnector = new WSConnector();
