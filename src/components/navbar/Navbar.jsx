import { useContext, useEffect } from "react";
import { authContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import { logout } from "../../firebase/config";
import { SVG } from "../SVG";

export const Navbar = () => {
  const { currentUser } = useContext(authContext);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      if (await currentUser) {
        console.log(currentUser);
      } else {
        console.log("User not logged in.");
      }
    };
  }, []);
  return (
    <nav className="nav">
      <SVG />
    </nav>
  );
};
