import React, { Component } from 'react';
import classes from './Tile.module.css';

class Tile extends Component {

    render() {
        const handleStyleChangeClick = e => {
            // const newArray = [...this.props.userTiles]
            // newArray.push(this.props.index);

            this.props.userTiles.push(this.props.index);

            console.log('index: ', this.props.index)
            console.log('random number: ', this.props.randomTile)
            console.log('userTiles: ', this.props.userTiles)

            if (e.target.style.backgroundColor === 'yellow')
                e.target.style.backgroundColor = 'white';
            else e.target.style.backgroundColor = 'yellow';
        }

        const handleStyleChangeHover = e => {
            e.target.style.cursor = 'pointer';
        }


        return <div
            className={this.props.randomNumber <= .5 ? classes.Tile : classes.RandomTile}
            onClick={this.props.choosing ? handleStyleChangeClick : null}
            onMouseOver={this.props.choosing ? handleStyleChangeHover : null}
        ></div>
    }
}
export default Tile;

