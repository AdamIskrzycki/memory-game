import React from "react";
import classes from "./Nav.module.css";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { IconButton, Button } from "@material-ui/core";

const Nav = (props) => {
  const iconStyles = {
    fontSize: "50px",
    cursor: "pointer",
    color: "white",
  };

  return (
    <nav className={classes.NavBar}>
      <IconButton component={Link} to="/">
        <ArrowBackIcon style={iconStyles} />
      </IconButton>
      <a href="/sign-in">
        <button className={classes.SignInButton} style={{display: !props.showSignIn ? "none" : "block"}}>
          Sign in to save your highscores!
        </button>
      </a>
    </nav>
  );
};

export default Nav;
