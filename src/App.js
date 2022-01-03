import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import { useAuth } from "./firebase/config";

//Context API
import { authContext } from "./context/AuthContext";

//Pages import, 1 line thanks.
import { Login, Conversation, Profile } from "./pages";

export const App = () => {
  const currentUser = useAuth();
  return (
    <Router>
      <authContext.Provider value={{ currentUser }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/conversation" element={<Conversation />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/*" element={<Profile />} />
        </Routes>
      </authContext.Provider>
    </Router>
  );
};
