import React, { Component } from "react";
import classes from "./Tile.module.css";

class Tile extends Component {
  render() {
    const handleStyleChangeHover = (e) => {
      e.target.style.cursor = "pointer";
    };

    return (
      <div
        className={this.props.isHighlighted ? classes.RandomTile : classes.Tile}
        onClick={this.props.onTileClick ? this.props.onTileClick : null}
        onMouseOver={this.props.onTileClick ? handleStyleChangeHover : null}
      ></div>
    );
  }
}
export default Tile;
