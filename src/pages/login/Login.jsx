import "./login.scss";

// Context
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

export const Login = () => {
  const { isAuth, isAuthenticated } = useContext(AuthContext);
  return (
    <div>
      <h1>Bich</h1>
    </div>
  );
};
