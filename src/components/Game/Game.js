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
    hasPlayerWon: false
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
      this.setState({ randomTiles: array });
      setTimeout(() => {
        this.setState({ renderingRandomTiles: true });
      }, 250);
      setTimeout(() => {
        this.setState({ renderingRandomTiles: false, isPlayerChoosing: true });
      }, 750);
    };

    const onTileClick = (index) => {
      const newUserTiles = [...this.state.userTiles];

      newUserTiles[index] ? newUserTiles[index] = false : newUserTiles[index] = true

      this.setState({ userTiles: newUserTiles });

      if (_.isEqual(newUserTiles, this.state.randomTiles)) {
        this.setState({hasPlayerWon: true})
      }
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
        </main>
        {this.state.hasPlayerWon ? <p className={classes.YouWon}>YOU WON !!!</p> : null}
        <button className={classes.PlayButton} onClick={gameStartHandler}>
          Play
        </button>
      </>
    );
  }
}

export default Game;
