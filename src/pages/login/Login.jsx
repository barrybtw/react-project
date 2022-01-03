import "./login.scss";

// Context
import { useContext, useRef, useState } from "react";
import { authContext } from "../../context/AuthContext";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { auth, provider } from "../../firebase/config";
import { useNavigate } from "react-router-dom";

//Assets

export const Login = () => {
  const { isAuth, setIsAuth, currentUser } = useContext(authContext);
  const formRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // Signed in
        console.log(result.user);
        setIsAuth(true);
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("googleID", result.uid);
        // ...

        //To Save to database later
        // const displayName = result.user.displayName;
        // const email = result.user.email;
        // const useravatar = result.user.photoURL;

        // navigate("/conversation");
      })
      .catch((error) => {
        // Failed sign in
        console.log(error.message);
        console.log(error.code);
        // ...
      });
  };
  const loginWithMail = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // navigate("/conversation");
        console.log(currentUser);
        // ...
      })
      .catch((error) => {
        // Failed sign in
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        // ...
      });
  };

  const handleMail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <section className="login__container">
      <div className="login__header">
        <h1>LOGIN</h1>
      </div>
      <form
        className="login__form"
        id="login__form"
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <div className="login__form-field">
          <label htmlFor="" className="login__form-label">
            Email
          </label>
          <input
            type="email"
            placeholder="Begin typing..."
            onChange={handleMail}
            className="login__form-input input__form-input-email"
          />
        </div>
        <div className="login__form-field">
          <label htmlFor="" className="login__form-label">
            Password
          </label>
          <input
            type="password"
            placeholder="Begin typing..."
            onChange={handlePassword}
            className="login__form-input input__form-input-password"
          />
        </div>
        <button
          form="login__form"
          className="login__button--styles login__form-submit"
          onClick={loginWithMail}
        >
          Login
        </button>
      </form>
      <div className="login__splitter">
        Don't have an account? Make one right now!
      </div>
      <h1>{currentUser && <>{currentUser.displayName}</>}</h1>
      <div className="login__google">
        <button onClick={loginWithGoogle} className="login__button--styles">
          Login With Google
        </button>
      </div>
    </section>
  );
};
