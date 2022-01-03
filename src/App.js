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
          <Route path="/conversation/:id" element={<Login />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </AuthContext.Provider>
    </Router>
  );
};
