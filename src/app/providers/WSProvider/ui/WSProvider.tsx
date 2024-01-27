import { FC, Fragment, ReactNode, memo, useEffect, useState } from "react";

import { WSConnector } from "../config/WSConnector";
import { WSContext } from "../config/WSContext";

interface WSProviderProps {
  className?: string;
  children?: ReactNode;
}

const wsConnector = new WSConnector();

export const WSProvider: FC<WSProviderProps> = memo((props) => {
  const { className, children } = props;

  const [wsClient, setWsClient] = useState({});

  useEffect(() => {
    wsConnector.connect();

    if (wsConnector.client) {
      setWsClient(wsConnector.client);
    }

    return () => {
      wsConnector.disconnect();
    };
  }, []);

  return <WSContext.Provider value={wsClient}>{children}</WSContext.Provider>;
});
