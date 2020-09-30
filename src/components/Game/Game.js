import React, { Component } from 'react';
import classes from './Game.module.css';
import { Link } from 'react-router-dom';
import Tile from '../Game/Tile/Tile';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { IconButton } from '@material-ui/core';
import _ from 'lodash';

class Game extends Component {

    state = {
        renderingRandomTiles: false,
        isPlayerChoosing: false,
        randomTiles: [],
        userTiles: []
    }
    render() {

        const iconStyles = {
            fontSize: '50px',
            cursor: 'pointer',
            color: 'white',
        }

        const easyModeBoardSize = _.range(16);
        const easyModeTiles = [];

        const gameStartHandler = () => {
            setTimeout(() => {
                this.setState({ renderingRandomTiles: true })
            }, 250)
            setTimeout(() => {
                this.setState({ renderingRandomTiles: false, isPlayerChoosing: true })
            }, 750)
        }

        return (
            <>
                <nav className={classes.NavBar}>
                    <IconButton component={Link} to='/'>
                        <ArrowBackIcon style={iconStyles} />
                    </IconButton>
                </nav>
                <main className={classes.GameContainer}>
                    {easyModeBoardSize.map((index) => {

                        let random = Math.random();

                        return easyModeTiles.concat(<Tile
                            index={index}
                            key={index}
                            randomNumber={random}
                            choosing={this.state.isPlayerChoosing}
                            userTiles={this.state.userTiles} />)
                    })}
                    {/* {console.log('randomTiles: ', this.state.randomTiles)} */}
                </main>
                <button className={classes.PlayButton} onClick={gameStartHandler}>Play</button>
            </>
        )
    }
}

export default Game;