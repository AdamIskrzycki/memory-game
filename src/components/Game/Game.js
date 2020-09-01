import React, { Component } from 'react';
import classes from './Game.module.css';
import { Link } from 'react-router-dom';
import Tile from '../Game/Tile/Tile';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { IconButton, Hidden } from '@material-ui/core';

class Game extends Component {

    state = {
        hasGameStarted: false            
    }

    render() {


        const iconStyles = {
            fontSize: '50px',
            cursor: 'pointer',
            color: 'white',
        }

        const easyMode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        const easyModeTiles = [];

        const gameStartHandler = () => {
            this.setState({hasGameStarted: true})
        }

        return (
            <>
                <nav className={classes.NavBar}>
                    <IconButton component={Link} to='/'>
                        <ArrowBackIcon style={iconStyles}/>
                    </IconButton>
                </nav>
                <main className={classes.GameContainer}>
                    {easyMode.map((index) => {
                        easyModeTiles.push(<Tile key={index} random={this.state.hasGameStarted ? Math.floor(Math.random() * 2) : 0} />)
                    })}
                    {console.log(Math.floor(Math.random() * easyModeTiles.length))}
                    {easyModeTiles}
                </main>
                <button className={classes.PlayButton} onClick={gameStartHandler} >Play</button>
            </>
        )
    }
}

export default Game;