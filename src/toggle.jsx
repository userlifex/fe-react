import { Button } from "react-bootstrap";
import { useAuthContext } from "./context/auth/auth.context";

export const Toggle = () => {
  const { toggleLogged, isLogged, logout } = useAuthContext();
  return (
    <div>
      <Button onClick={() => logout()}>Logut</Button>
    </div>
  );
};
