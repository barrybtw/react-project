import { useContext, useEffect } from "react";
import { authContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/site_logo.png";
import "./Navbar.scss";
import { logout } from "../../firebase/config";

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
      <figure>
        <Link to="/">
          <img src={logo} alt="" id="site-logo" />
        </Link>
      </figure>
      <ul className="nav__link--list">
        <li className="nav__link">
          <Link
            to="/conversation"
            className="
              nav__link--anchor 
              link__hover-effect 
              link__hover-effect--black"
          >
            Conversations
          </Link>
        </li>
        <li className="nav__link">
          {currentUser ? (
            <button
              className="nav__link--anchor-primary nav__login"
              onClick={(event) => {
                event.preventDefault();
                logout();
              }}
            >
              Log Out
            </button>
          ) : (
            <button
              className="nav__link--anchor-primary nav__logout"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              Sign In
            </button>
          )}
          {!currentUser && (
            <button
              className="nav__link--anchor-primary nav__logout"
              onClick={(e) => {
                e.preventDefault();
                navigate("create-user");
              }}
            >
              Sign Up
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};
