import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// We can change to browser router later, hashrouter just works with netlify atm
import { useAuth } from "./firebase/config";

//Context API
import { authContext } from "./context/AuthContext";

//Pages import, 1 line thanks.
import { Login, Profile, CreateUser, Dashboard } from "./pages";

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
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/*" element={<Profile />} />
        </Routes>
      </authContext.Provider>
    </Router>
  );
};
