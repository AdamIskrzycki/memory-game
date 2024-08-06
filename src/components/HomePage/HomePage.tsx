// const react = require("react")
// const classes = require("./HomePage.module.css")
// const Rules = require("./Rules/Rules")
// const TitleBox = require("./TitleBox/TitleBox")


import React from "react";
import classes from "./HomePage.module.css";
import Rules from "./Rules/Rules";
import TitleBox from "./TitleBox/TitleBox";

const HomePage = () => {
  return (
    <main className={classes.HomePageContainer}>
      <TitleBox />
      <Rules />
    </main>
  );
};

export default HomePage;
