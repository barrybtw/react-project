import "./createUser.scss";
import { useContext, useRef, useState } from "react";
import { authContext } from "../../context/AuthContext";

export const CreateUser = () => {
  const { currentUser } = useContext(authContext);
  const formRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleMail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <section className="createUser__container">
      <div className="createUser__header">
        <h1>Create New Account</h1>
      </div>
      <form
        className="createUser__form"
        id="createUser__form"
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <div className="createUser__form-field">
          <label htmlFor="" className="createUser__form-label">
            Email
          </label>
          <input
            type="email"
            placeholder="Begin typing..."
            onChange={handleMail}
            className="createUser__form-input createUser__input-form--input-email"
          />
        </div>
        <div className="createUser__form-field">
          <label htmlFor="" className="createUser__form-label">
            Password
          </label>
          <input
            type="password"
            placeholder="Begin typing..."
            onChange={handlePassword}
            className="createUser__form-input createUser__input--form-input-password"
          />
        </div>
        <div className="createUser__form-field">
          <label htmlFor="" className="createUser__form-label">
            Name
          </label>
          <input
            type="text"
            placeholder="Begin typing..."
            onChange={handlePassword}
            className="createUser__form-input createUser__input--form-input-name"
          />
        </div>
        <div className="createUser__form-field">
          <label htmlFor="" className="createUser__form-label">
            Name
          </label>
          <input
            type="text"
            placeholder="Begin typing..."
            onChange={handlePassword}
            className="createUser__form-input createUser__input--form-input-name"
          />
        </div>
        <div className="createUser__form-field">
          <label htmlFor="" className="createUser__form-label">
            Country of residence
          </label>
          <input
            type="text"
            placeholder="Begin typing..."
            onChange={handlePassword}
            className="createUser__form-input createUser__input--form-input-country"
          />
        </div>
        <button
          form="createUser__form"
          className="createUser__button--styles createUser__form-submit"
          //   onClick={createNewUserWithMail}
        >
          Create New User
        </button>
      </form>
    </section>
  );
};