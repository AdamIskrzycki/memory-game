import React, { Component } from 'react';
import classes from './Game.module.css';
import { Link } from 'react-router-dom';
import Tile from '../Game/Tile/Tile';

class Game extends Component {
    render() {

        const easyMode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

        return (
            <>
                <nav className={classes.NavBar}>
                    <Link to='/'>
                        <button className={classes.HomeButton}>Home</button>
                    </Link>
                </nav>
                <main className={classes.GameContainer}>
                    {easyMode.map(el => {
                        return <Tile />
                    })}
                </main>
                <button className={classes.PlayButton}>Play</button>
            </>
        )
    }
}

export default Game;