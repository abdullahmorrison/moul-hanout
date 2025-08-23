"use client";
import { ReactNode, useContext, useState, createContext } from "react";

type AlertType = "success" | "error";

type AlertState = {
  message: string;
  type: AlertType;
};

type AlertContextProps = {
  showAlert: (message: string, type: AlertType) => void;
  hideAlert: () => void;
};

const AlertContext = createContext<AlertContextProps | undefined>(undefined);

export const AlertProvider = ({ children }: { children: ReactNode }) => {
  const [alert, setAlert] = useState<AlertState>();

  const showAlert = (message: string, type: AlertType) => {
    setAlert({ message, type });
    setTimeout(() => setAlert(undefined), 3000); // auto close
  };
  const hideAlert = () => setAlert(undefined);

  return (
    <AlertContext.Provider value={{ showAlert, hideAlert }}>
      {alert && (
        <div
          className={`fixed bg-white py-2 px-6 shadow-lg border rounded left-[50%] top-20 -translate-x-[50%] z-100 duration-100 animate-slide-in
          ${alert.type === "success" ? "text-green-500 border-green-500" : undefined} 
          ${alert.type === "error" ? "text-red-500 border-red-500" : undefined}`}
        >
          {alert.message}
        </div>
      )}
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) throw new Error("useAlert must be used within AlertProvider");
  return context;
};
