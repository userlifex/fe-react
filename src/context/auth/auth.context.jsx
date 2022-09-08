import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Loader } from "../../components/loader/loader";
import { useAlertsContext } from "../alerts/alerts.context";
import { logginService } from "../../services/loggin-service";
import { getUserService } from "../../services/create-user";

const AuthContext = createContext({
  isLogged: false,
});

const AuthContextProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(
    !!window.localStorage.getItem("isLogged")
  );
  const [role, setRole] = useState(window.localStorage.getItem("role"));
  const [isLoadingLogged, setIsLoadingLogged] = useState(true);
  const [user, setUser] = useState(null);
  const { updateAlert } = useAlertsContext();

  //useEffect(() => {
  //validateToken();
  //}, []);

  useEffect(() => {
    validateToken();
  }, [isLogged]);

  useEffect(() => {
    if (!user) getUser();
  }, [user]);

  const getUser = async () => {
    const user = await getUserService(window.localStorage.getItem("token"));
    setUser(user);
    window.localStorage.setItem("role", user.role);
    setRole(user.role);
  };

  const validateToken = async () => {
    const token = window.localStorage.getItem("token");

    if (token == "") {
      setIsLogged(false);
      setIsLoadingLogged(false);
      return;
    }

    const isValid = await logginService.isTokenValid(token);
    setIsLogged(!!isValid);
    window.localStorage.setItem("isLogged", !!isValid);
    setIsLoadingLogged(false);
  };

  const logout = () => {
    window.localStorage.setItem("token", "");
    window.localStorage.setItem("isLogged", false);
    window.localStorage.setItem("role", "");
    setIsLoadingLogged(false);
    setIsLogged(false);
  };

  const updateIsLogged = (value) => {
    window.localStorage.setItem("log", value);
  };

  const login = async (user) => {
    setIsLoadingLogged(true);
    const loggedUser = await logginService.logUser(user);

    if (!loggedUser) {
      updateAlert({
        variant: "danger",
        message: "Datos del usuario incorrectos",
      });

      setIsLoadingLogged(false);
      return;
    }

    window.localStorage.setItem("token", loggedUser.accesToken);
    window.localStorage.setItem("role", loggedUser.user.role);

    setIsLogged(true);
    setIsLoadingLogged(false);
    setUser(loggedUser.user);
    setRole(loggedUser.user.role);
  };

  const context = {
    isLogged,
    setIsLogged,
    setIsLoadingLogged,
    validateToken,
    login,
    logout,
    user,
    role,
  };

  //if (isLoadingLogged) {
  //return <Loader />;
  //}

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export { AuthContextProvider, useAuthContext };
