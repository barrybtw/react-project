import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

//Context API
import { AuthContext } from "./context/AuthProvider";

//Pages import, 1 line thanks.
import { Login, Conversation, Profile } from "./pages";

export const App = () => {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  //States go here
  return (
    <Router>
      <AuthContext.Provider value={(isAuthenticated, setisAuthenticated)}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/conversation" element={<Conversation />} />
          <Route path="/conversation/:id" element={<TalkingToUser />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/*" element={<Profile />} />
        </Routes>
      </AuthContext.Provider>
    </Router>
  );
};
