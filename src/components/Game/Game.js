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
        randomTiles: []
    }

    // shouldComponentUpdate(nextProps) {
    //     const renderingTiles = this.props.renderingRandomTiles !== nextProps.renderingRandomTiles;
    //     const isChoosing = this.props.isPlayerChoosing !== nextProps.isPlayerChoosing
    //     return renderingTiles || isChoosing;
    // }


    generateRandomTile = (array) => {

        let random = Math.random();
        let newArray = []

        if (random > .5) {
            newArray = [...array, random];
            console.log('new array: ', newArray);
        }

        return newArray;
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
                        return easyModeTiles.concat(<Tile
                            key={index}
                            random={this.state.renderingRandomTiles ? this.generateRandomTile(this.state.randomTiles) : 0}
                            choosing={this.state.isPlayerChoosing} />)
                    })}
                    {console.log('state: ', this.state)}
                </main>
                <button className={classes.PlayButton} onClick={gameStartHandler}>Play</button>
            </>
        )
    }
}

export default Game;