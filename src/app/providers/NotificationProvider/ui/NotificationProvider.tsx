import { FC, PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const NotificationProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {children}
      <ToastContainer theme="colored" />
    </>
  );
};
