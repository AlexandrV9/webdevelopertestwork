import ReactDOM from "react-dom/client";

import { App } from "./app/App";
import { WSProvider } from "app/providers/WSProvider";
import { NotificationProvider } from "app/providers/NotificationProvider";
import { StoreProvider } from "app/providers/StoreProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <NotificationProvider>
    <StoreProvider>
      <WSProvider>
        <App />
      </WSProvider>
    </StoreProvider>
  </NotificationProvider>
);
