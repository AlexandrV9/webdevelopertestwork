import { FC, PropsWithChildren } from "react";
import { Provider } from "react-redux";

import { createReduxStore } from "../config/store";

interface StoreProviderProps extends PropsWithChildren {}

const StoreProvider: FC<StoreProviderProps> = (props) => {
  const { children } = props;
  const store = createReduxStore();

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
