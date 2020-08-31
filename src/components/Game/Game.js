import React, { Component } from 'react';
import classes from './Game.module.css';
import { Link } from 'react-router-dom';
import Tile from '../Game/Tile/Tile';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { IconButton } from '@material-ui/core';

class Game extends Component {
    render() {

        const iconStyles = {
            fontSize: '50px',
            cursor: 'pointer',
            color: 'white',
        }

        const easyMode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        const easyModeTiles = [];

        return (
            <>
                <nav className={classes.NavBar}>
                    <IconButton component={Link} to='/'>
                        <ArrowBackIcon style={iconStyles}/>
                    </IconButton>
                </nav>
                <main className={classes.GameContainer}>
                    {easyMode.map((index) => {
                        easyModeTiles.push(<Tile key={index} tiles={easyModeTiles}/>)
                    })}
                    {easyModeTiles}
                </main>
                <button className={classes.PlayButton}>Play</button>
            </>
        )
    }
}

export default Game;