import "./conversation.scss";

// Imports
import { useEffect } from "react";
import { useContext } from "react/cjs/react.development";
import { authContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Conversation = () => {
  const { currentUser } = useContext(authContext);
  const navigate = useNavigate();
  useEffect(() => {
    !currentUser && navigate("/");
  }, []);
  return (
    <div>
      <h1>conversation</h1>
    </div>
  );
};
