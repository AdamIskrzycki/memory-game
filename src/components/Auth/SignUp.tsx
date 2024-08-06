import React from "react";
import classes from "./Auth.module.css";
import Nav from '../Nav/Nav'

const SignUp = () => {
    return (
        <>
          <Nav showSignIn={false}/>
          <div className={classes.AuthContainer}>
            <header>Sign Up</header>
            <form>
              <label for="email">E-mail</label>
              <input type="text" id="email" />
              <label for="password">Password</label>
              <input type="password" id="password" />
            </form>
    
            <a href="/sign-in">
              <div className={classes.HasAccountLink}>
                Already have an account? Sign in!
              </div>
            </a>
          </div>
        </>
      );
};

export default SignUp;
