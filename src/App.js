import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useAuth } from "./firebase/config";

//Context API
import { authContext } from "./context/AuthContext";

//Pages import, 1 line thanks.
import { Login, Conversation, Profile } from "./pages";

//Component imports, 1 line thanks.
import { Navbar } from "./components";

//Helpers
import { handleLogout } from "./helpers/helpers";

export const App = () => {
  const currentUser = useAuth();
  return (
    <Router>
      <authContext.Provider value={{ currentUser, handleLogout }}>
        <Navbar />
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
