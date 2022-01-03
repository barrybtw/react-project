import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

//Pages import, 1 line thanks.
import { Home } from "./pages";

export const App = () => {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  //States go here
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      buhuhuehefuefbewjfbwfnkfsbckdbvksdnvkdn
    </Router>
  );
};
