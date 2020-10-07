import React, { Component } from "react";
import classes from "./Game.module.css";
import { Link } from "react-router-dom";
import Tile from "../Game/Tile/Tile";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { IconButton } from "@material-ui/core";
import _ from "lodash";

class Game extends Component {
  numberOfTiles = 16;

  state = {
    renderingRandomTiles: false,
    isPlayerChoosing: false,
    randomTiles: _.range(this.numberOfTiles).map((x) => (x = false)),
    userTiles: _.range(this.numberOfTiles).map((x) => (x = false)),
  };

  render() {
    const iconStyles = {
      fontSize: "50px",
      cursor: "pointer",
      color: "white",
    };
    const easyModeTiles = [];

    const gameStartHandler = () => {
      const array = _.range(this.numberOfTiles).map(
        (x) => (x = _.sample([true, false]))
      );
      console.log("array: ", array);
      this.setState({ randomTiles: array });
      setTimeout(() => {
        this.setState({ renderingRandomTiles: true });
      }, 250);
      setTimeout(() => {
        this.setState({ renderingRandomTiles: false, isPlayerChoosing: true });
      }, 750);
    };

    const onTileClick = (index) => {
      console.log("index", index);
      console.log("userTiles: ", this.state.userTiles);

      const newUserTiles = [...this.state.userTiles];

      if (newUserTiles[index] === false) {
        newUserTiles[index] = true;
      } else newUserTiles[index] = false;

      if (_.isEqual(newUserTiles, this.state.randomTiles)) {
        console.log("you won");
      }

      this.setState({ userTiles: newUserTiles });
    };

    return (
      <>
        <nav className={classes.NavBar}>
          <IconButton component={Link} to="/">
            <ArrowBackIcon style={iconStyles} />
          </IconButton>
        </nav>
        <main className={classes.GameContainer}>
          {this.state.isPlayerChoosing
            ? this.state.userTiles.map((tile, index) => {
                return easyModeTiles.concat(
                  <Tile
                    isHighlighted={tile}
                    key={index}
                    onTileClick={() => onTileClick(index)}
                  />
                );
              })
            : this.state.randomTiles.map((tile, index) => {
                return easyModeTiles.concat(
                  <Tile isHighlighted={tile} key={index} />
                );
              })}
          {console.log("randomTiles: ", this.state.randomTiles)}
          {console.log("userTiles: ", this.state.userTiles)}
        </main>
        <button className={classes.PlayButton} onClick={gameStartHandler}>
          Play
        </button>
      </>
    );
  }
}

export default Game;
