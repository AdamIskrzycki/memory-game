import React from "react";
import classes from "./Auth.module.css";
import Nav from '../Nav/Nav'

const SignIn: React.FC = () => {

  return (
    <>
      <Nav showSignIn={false}/>
      <div className={classes.AuthContainer}>
        <header>Sign In</header>
        <form>
          <label htmlFor="email">E-mail</label>
          <input type="text" id="email" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </form>

        <a href="/sign-up">
          <div className={classes.HasAccountLink}>
            Don't have an account? Sign up!
          </div>
        </a>
      </div>
    </>
  );
};

export default SignIn;
