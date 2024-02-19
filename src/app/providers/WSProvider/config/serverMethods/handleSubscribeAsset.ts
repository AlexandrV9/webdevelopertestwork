import { Client } from "mock-socket";
import { AppDB } from "../db/db";
import { ServerMessageType } from "shared/types/Enums";
import { ClientEnvelope } from "shared/models/ClientMessages";

export function handleSubscribeAsset(
  socket: Client,
  db: AppDB,
  data: ClientEnvelope,
) {

  const { instrument } = data.message as any;

  const asset = db.getAssetByInstrument(instrument);

  socket.send(
    JSON.stringify({
      messageType: ServerMessageType.assetDataUpdate,
      message: asset,
    })
  );
}
