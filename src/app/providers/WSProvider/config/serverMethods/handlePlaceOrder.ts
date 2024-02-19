import { Client } from "mock-socket";
import { ClientEnvelope } from "shared/models/ClientMessages";
import { ServerMessageType } from "shared/types/Enums";
import { AppDB } from "../db/db";
import { Rate } from "shared/models/Rate";

let i = 10;

export const handlePlaceOrder = async (
  socket: Client,
  data: ClientEnvelope,
  db: AppDB
) => {
  const { side, price, amount, instrument } = data.message as any;

  const newRate: Rate = {
    id: i++,
    creation_time: Date.now(),
    change_time: Date.now(),
    status: 1,
    side,
    price,
    amount,
    instrument,
  };

  db.addRate(newRate);

  socket.send(
    JSON.stringify({
      messageType: ServerMessageType.success,
      message: newRate,
    })
  );
};
