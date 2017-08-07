import React from "react";
//import GameBoard from "./GameBoard.js";
import * as C from "./Constants.js";

inputChecker = (userInput, boardState, userState) => {
  switch (userInput) {
    case "move":
      // run check funtion
      break;
    case "counterClockwise":
      rotate(userInput, userState);
      break;
    case "clockwise":
      // check current position and make adjustments
      break;
    case "stay":
      break;
    default:
      break;
  }
};
// cd stands for UserState
rotate = (input, us) => {
  let newDirection = "";
  switch (us.direction) {
    case C.DIRECTION_NORTH:
      if (input === "clockwise") {
        newDirection = C.DIRECTION_EAST;
      } else {
        newDirection = C.DIRECTION_WEST;
      }
      break;
    case C.DIRECTION_SOUTH:
      if (input === "clockwise") {
        newDirection = C.DIRECTION_WEST;
      } else {
        newDirection = C.DIRECTION_EAST;
      }
      break;
    case C.DIRECTION_EAST:
      if (input === "clockwise") {
        newDirection = C.DIRECTION_SOUTH;
      } else {
        newDirection = C.DIRECTION_NORTH;
      }
      break;
    case C.DIRECTION_WEST:
      if (input === "clockwise") {
        newDirection = C.DIRECTION_NORTH;
      } else {
        newDirection = C.DIRECTION_SOUTH;
      }
      break;
    default:
      break;
  }
  const newBoard = this.state.tiles.map(
    tile => (tile.player === "user" ? { ...tile, direction: direction } : tile)
  );
  this.setState({
    tiles: newBoard
  });
};

export default inputChecker;
