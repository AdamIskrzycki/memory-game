import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(6),
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%'
  }
}));

function Copyright() {
  return (
    <Typography variant="body2" color="white" align="center">
      {"Copyright © "}
      <span color="inherit">
        Memory Game
      </span>{" "}
      {new Date().getFullYear()}
      {". All rights reserved."}
    </Typography>
  );
}

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography
        variant="subtitle1"
        align="center"
        color="white"
        component="p"
      >
        For any questions feel free to contact us on memory-game@gmail.com!
      </Typography>
      <Copyright />
    </footer>
  );
};

export default Footer;
