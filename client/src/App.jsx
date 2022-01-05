import { HashRouter, Routes, Route } from "react-router-dom";
// We can change to browser router later, hashrouter just works with netlify atm
import { useAuth } from "./firebase/config";

//Context API
import { authContext } from "./context/AuthContext";

//Pages import, 1 line thanks.
import { Login, Conversation, Profile, CreateUser, Globalchat } from "./pages";

//Component imports, 1 line thanks.
import { Navbar } from "./components";

//Helpers
import { handleLogout } from "./helpers/helpers";

export const App = () => {
  const currentUser = useAuth();
  return (
    <HashRouter>
      <authContext.Provider value={{ currentUser, handleLogout }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/conversation" element={<Conversation />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chat" element={<Globalchat />} />
          <Route path="/*" element={<Profile />} />
        </Routes>
      </authContext.Provider>
    </HashRouter>
  );
};
