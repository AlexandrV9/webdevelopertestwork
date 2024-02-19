import { useContext, useMemo } from "react";
import { WSContext } from "../../../app/providers/WSProvider/config/WSContext";

export function useAPI() {
  const socket = useContext(WSContext);

  return useMemo(() => socket, [socket]);
}
