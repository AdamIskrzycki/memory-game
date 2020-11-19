import React, { Component } from "react";
import classes from "./Game.module.css";
import { Link } from "react-router-dom";
import Tile from "../Game/Tile/Tile";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { IconButton } from "@material-ui/core";
import _ from "lodash";
import Modal from './Modal/Modal';
import Timer from './Timer/Timer';

class Game extends Component {

  numberOfTiles = 16;

  state = {
    renderingRandomTiles: false,
    isPlayerChoosing: false,
    randomTiles: _.range(this.numberOfTiles).map((x) => (x = false)),
    userTiles: _.range(this.numberOfTiles).map((x) => (x = false)),
    openModal: false,
    startTime: null,
    endTime: null,
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
        this.setState({ renderingRandomTiles: false, isPlayerChoosing: true, startTime: new Date() });
      }, 750);
    };

    const onTileClick = (index) => {
      const newUserTiles = [...this.state.userTiles];

      newUserTiles[index] ? newUserTiles[index] = false : newUserTiles[index] = true

      this.setState({ userTiles: newUserTiles });
      console.log('userTiles', this.state.userTiles)
      console.log('randomTiles', this.state.randomTiles)
      
      if (_.isEqual(newUserTiles, this.state.randomTiles)) {
        this.setState({ openModal: true, endTime: new Date()})
      }

    };

    const handleModalClose = () => {
      this.setState({
        openModal: false,
        randomTiles: _.range(this.numberOfTiles).map((x) => (x = false)),
        userTiles: _.range(this.numberOfTiles).map((x) => (x = false)),
        isPlayerChoosing: false,
      })
    }

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
        {this.state.openModal ? <Modal time={this.state.endTime - this.state.startTime} handleClose={handleModalClose} openModal={this.state.openModal} /> : null}
        <button className={classes.PlayButton} onClick={gameStartHandler}>
          Play
        </button>
      </>
    );
  }
}

export default Game;
