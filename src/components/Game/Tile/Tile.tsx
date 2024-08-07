import React from "react";
import classes from "./Tile.module.css";


interface TileProps {
  index: number,
  isHighlighted: boolean,
  onTileClick?: (index: number) => void
}

const Tile: React.FC<TileProps> = (props) => {
  
    const handleStyleChangeHover = (e: React.MouseEvent<HTMLDivElement>) => {
      const target = e.target as HTMLDivElement
      target.style.cursor = "pointer";
    };

    const handleClick = () => { // this is done like that because of error below -> 
      //props.onTileClick is expected to handle a number parameter, but the onClick event handler in React expects a function that takes a MouseEvent parameter.
      //using intermediary functions is a common and practical approach to ensure type safety 
      //and to adapt your function signatures to match the expected signatures of event handlers in React.

      //in short - when an onClick or some other event expects certain Event type 
      //and you need to pass a function with other return and parameter types - create intermediary functions like this handleClick() function
      props.onTileClick!(props.index)
    };

    return (
      <div
        className={props.isHighlighted ? classes.RandomTile : classes.Tile}
        onClick={handleClick}
        // onMouseOver={props.onTileClick ? handleStyleChangeHover : null}
        onMouseOver={handleStyleChangeHover}
      ></div>
    );
  }


export default Tile;
