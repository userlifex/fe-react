import { createContext, useContext, useState, useEffect } from "react";

const AlertsContext = createContext({
  isAlertActive: false,
  type: "",
});

const AlertsContextProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("");
  const [isAlertActive, setIsAlertActive] = useState(false);

  useEffect(() => {
    let timeout = null;

    if (isAlertActive) {
      timeout = setTimeout(() => {
        setIsAlertActive(false);
      }, 4000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isAlertActive]);

  const updateAlert = ({ variant, message }) => {
    setIsAlertActive(true);
    setVariant(variant);
    setMessage(message);
  };

  const value = {
    isAlertActive,
    updateAlert,
    message,
    variant,
  };

  return (
    <AlertsContext.Provider value={value}>{children}</AlertsContext.Provider>
  );
};

const useAlertsContext = () => useContext(AlertsContext);

export { AlertsContextProvider, useAlertsContext };
