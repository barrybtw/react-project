import "./conversation.scss";

// Imports
import { useEffect, useContext } from "react";
import { authContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Conversation = () => {
  const { currentUser } = useContext(authContext);
  const navigate = useNavigate();
  useEffect(() => {
    const isUserLoggedIn = async () => {
      if (await currentUser) {
        console.log("lel");
      } else {
        navigate("/");
      }
    };
  }, []);
  return (
    <div>
      <h1>conversation</h1>
    </div>
  );
};
