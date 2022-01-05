import { useContext, useState } from "react";
import { authContext } from "../../context/AuthContext";

export const Globalchat = () => {
  const [message, setMessage] = useState("");
  const chat = document.getElementById("chat");
  const postMessage = () => {
    message.length > 0 && setMessage("");
    return;
  };
  return (
    <div>
      <h1>Haha</h1>
      <input
        type="text"
        onChange={(event) => {
          setMessage(event.target.value);
        }}
        value={message}
      />
      <button onClick={postMessage}>Send message</button>
      <h1>CHAT BELOW</h1>
      <div id="chat"></div>
    </div>
  );
};
