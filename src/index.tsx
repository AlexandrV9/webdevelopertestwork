import ReactDOM from "react-dom/client";

import { App } from "./app/App";
import { WSProvider } from "app/providers/WSProvider";
import { NotificationProvider } from "app/providers/NotificationProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <NotificationProvider>
    <WSProvider>
      <App />
    </WSProvider>
  </NotificationProvider>
);
