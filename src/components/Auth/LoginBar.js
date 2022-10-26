import LoginButton from "./Button";
import classes from "./LoginBar.module.css";
import { useNavigate } from "react-router-dom";
import { Fragment, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { svActions } from "../../store/search-value";

const LoginBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    setIsLoading(true);
    navigate("/welcome");
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD4Im67E3Wb6dc_TKDFmZ3d0RbdIhuwvug";

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        dispatch(svActions.setAccessToken(data.idToken));
        navigate("/welcome");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <Fragment>
      <section className={classes.auth}>
        <h1>Login</h1>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />
          </div>
          {isLoading ? <p>Sending request...</p> : <LoginButton />}
        </form>
      </section>
    </Fragment>
  );
};

export default LoginBar;
