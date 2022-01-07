import { useContext, useEffect } from "react";
import { authContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import { logout } from "../../firebase/config";
import default__user from "../../assets/default__profile.svg";
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
    checkUser();
  }, []);
  return (
    <nav className="nav">
      <SVG className="nav__brand" />
      <div className="nav__topright">
        <button className="nav__unlock-pro">
          <svg
            aria-hidden="true"
            data-prefix="fas"
            data-icon="crown"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            className="crown-solid_svg__svg-inline--fa crown-solid_svg__fa-crown crown-solid_svg__fa-w-20 fa-crown fa-crown__small"
            style={{ paddingBottom: 2 }}
          >
            <path
              fill="currentColor"
              d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48 0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8 0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8 26.5 0 48-21.5 48-48s-21.5-48-48-48z"
            ></path>
          </svg>
          Unlock Pro
        </button>
        {currentUser ? (
          <img
            src={default__user}
            alt={`Your avatar`}
            className="nav__avatar"
          />
        ) : (
          <img
            src={default__user}
            alt="Default user logo"
            className="nav__avatar"
          />
        )}
      </div>
    </nav>
  );
};
