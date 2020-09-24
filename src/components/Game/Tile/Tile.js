import React from 'react';
import classes from './Tile.module.css';

const Tile = (props) => {

    const handleStyleChangeClick = e => {
        if (e.target.style.backgroundColor === 'yellow')
            e.target.style.backgroundColor = 'white';
        else e.target.style.backgroundColor = 'yellow';
    }

    const handleStyleChangeHover = e => {
        e.target.style.cursor = 'pointer';
    }

    return <div
        className={props.random <= .5 ? classes.Tile : classes.RandomTile}
        onClick={props.choosing ? handleStyleChangeClick : null}
        onMouseOver={props.choosing ? handleStyleChangeHover : null}
    ></div>
}

export default Tile;

