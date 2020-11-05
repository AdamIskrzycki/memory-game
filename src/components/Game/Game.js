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
    seconds: 0,
    isActive: false
  };

  render() {
    const iconStyles = {
      fontSize: "50px",
      cursor: "pointer",
      color: "white",
    };
    const easyModeTiles = [];

    const toggleTimer = () => {
      this.setState({ isActive: !this.state.isActive });
    }

    const resetTimer = () => {
      this.setState({ seconds: 0, isActive: false });
    }

    const gameStartHandler = () => {
      toggleTimer();
      const array = _.range(this.numberOfTiles).map(
        (x) => (x = _.sample([true, false]))
      );
      
      this.setState({ randomTiles: array });
      
      setTimeout(() => {
        this.setState({ renderingRandomTiles: true });
      }, 250);

      setTimeout(() => {
        this.setState({ renderingRandomTiles: false, isPlayerChoosing: true });
        let interval = null;
        if (this.state.isActive) {
          interval = setInterval(() => {
            this.setState({ seconds: this.state.seconds + 1 });
            if (_.isEqual(this.state.userTiles, this.state.randomTiles)) {
              this.setState({ openModal: true})
              clearInterval(interval)
            }
          }, 1000);
        } else if (!this.state.isActive && this.state.seconds !== 0) {
          clearInterval(interval);
        }
        return () => clearInterval(interval);
      }, 750);
    };

    const onTileClick = (index) => {
      const newUserTiles = [...this.state.userTiles];

      newUserTiles[index] ? newUserTiles[index] = false : newUserTiles[index] = true

      this.setState({ userTiles: newUserTiles });

      // if (_.isEqual(newUserTiles, this.state.randomTiles)) {
      //   this.setState({ openModal: true})
      // }
    };

    const handleModalClose = () => {
      this.setState({
        openModal: false,
        randomTiles: _.range(this.numberOfTiles).map((x) => (x = false)),
        userTiles: _.range(this.numberOfTiles).map((x) => (x = false)),
        isPlayerChoosing: false,
        seconds: 0,
        isActive: false
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
        {this.state.openModal ? <Modal time={this.state.seconds} handleClose={handleModalClose} openModal={this.state.openModal} /> : null}
        <button className={classes.PlayButton} onClick={gameStartHandler}>
          Play
        </button>
        <div className="time">
          {this.state.seconds}s
        </div>
      </>
    );
  }
}

export default Game;
