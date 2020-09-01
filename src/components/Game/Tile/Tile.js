import React from 'react';
import classes from './Tile.module.css';

const Tile = (props) => {
    
    return <div className={props.random === 0 ? classes.Tile : classes.RandomTile}></div>
}

export default Tile;

