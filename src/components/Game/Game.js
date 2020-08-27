import React, { Component } from 'react';
import classes from './Game.module.css';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Tile from '../Game/Tile/Tile';

class Game extends Component {
    render() {
        return (
            <>
                <nav className={classes.NavBar}><Button variant='contained' component={Link} to='/'>Home</Button></nav>
                <main className={classes.GameContainer}>
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                    <Tile />
                </main>
            </>
        )
    }
}

export default Game;