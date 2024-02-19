import { FC, ReactNode } from "react";

import { WSContext } from "../config/WSContext";
import { useWSConnect } from "../hooks/useWSConnect";

interface WSProviderProps {
  children?: ReactNode;
}

export const WSProvider: FC<WSProviderProps> = ({ children }) => {
  const { isConnect, API } = useWSConnect();

  if (!isConnect) {
    return <h1>Происходит подключение к WebSocket-серверу...</h1>;
  }

  if (!API) {
    return <h1>Возникли ошибки...</h1>;
  }

  return <WSContext.Provider value={API}>{children}</WSContext.Provider>;
};
