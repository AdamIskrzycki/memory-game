import React from 'react';
import classes from './Tile.module.css';

const Tile = (props) => {

    const random = Math.floor(Math.random() * props.tiles.length);
    
    return <div className={random > 4 ? classes.Tile : classes.RandomTile}></div>
}

export default Tile;

