import React, { useState } from "react";
import classes from "./Game.module.css";
import Tile from "./Tile/Tile";
import _ from "lodash";
import Modal from "./Modal/Modal";
import Nav from '../Nav/Nav'

const Game: React.FC = () => {

    const numberOfTiles = 16;

    //const [renderingRandomTiles, setRenderingRandomTiles] = useState(false)
    const [isPlayerChoosing, setIsPlayerChoosing] = useState(false)
    const [randomTiles, setRandomTiles] = useState(Array(numberOfTiles).fill(false))
    const [userTiles, setUserTiles] = useState((Array(numberOfTiles).fill(false)))
    const [openModal, setOpenModal] = useState(false)
    const [startTime, setStartTime] = useState<Date | null>(null)
    const [endTime, setEndTime] = useState<Date | null>(null)


    const tiles: React.ReactElement[] = [];

    const gameStartHandler = () => {
      const array = randomTiles.map(
        (x) => (x = _.sample([true, false]))
      );

      setRandomTiles(array)

      // setTimeout(() => {
      //   setRenderingRandomTiles(true)
      // }, 250);

      setTimeout(() => {
        //setRenderingRandomTiles(false)
        setIsPlayerChoosing(true)
        setStartTime(new Date())
      }, 750);
    };

    const onTileClick = (index: number) => {
      const newUserTiles = [...userTiles];

      newUserTiles[index]
        ? (newUserTiles[index] = false)
        : (newUserTiles[index] = true);

      setUserTiles(newUserTiles)

      if (_.isEqual(newUserTiles, randomTiles)) {
        setOpenModal(true)
        setEndTime(new Date())
      }
    };

    const handleModalClose = () => {

      setOpenModal(false)
      setRandomTiles(Array(numberOfTiles).fill(false))
      setUserTiles(Array(numberOfTiles).fill(false))
      setIsPlayerChoosing(false)
    };

    return (
      <>
        <Nav showSignIn={true}/>
        <main className={classes.GameContainer}>
          {isPlayerChoosing
            ? userTiles.map((tile, index) => {
                return tiles.concat(
                  <Tile
                    isHighlighted={tile}
                    index={index}
                    key={index}
                    onTileClick={() => onTileClick(index)}
                  />
                );
              })
            : randomTiles.map((tile, index) => {
                return tiles.concat(<Tile isHighlighted={tile} key={index} index={index}/>); 
              })}
        </main>
        {openModal ? (
          <Modal
            time={+endTime! - +startTime!}
            handleClose={handleModalClose}
            openModal={openModal}
          />
        ) : null}
        <button className={classes.PlayButton} onClick={gameStartHandler}>
          Play
        </button>
        <button className={classes.PlayButton} onClick={handleModalClose}>
          Reset
        </button>
      </>
    );
  }

export default Game;
