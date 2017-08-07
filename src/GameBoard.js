import React, { Component } from "react";
import * as C from "./Constants.js";
import Tile from "./Tile.js";

class GameBoard extends Component {
  state = {
    tiles: [
      { player: C.PLAYER_ENEMY, direction: C.DIRECTION_NORTH, x: 0, y: 0 },
      { player: C.PLAYER_OPEN, direction: C.DIRECTION_NORTH, x: 1, y: 0 },
      { player: C.PLAYER_OPEN, direction: C.DIRECTION_NORTH, x: 2, y: 0 },
      { player: C.PLAYER_ENEMY, direction: C.DIRECTION_EAST, x: 0, y: 1 },
      { player: C.PLAYER_USER, direction: C.DIRECTION_NORTH, x: 1, y: 1 },
      { player: C.PLAYER_ENEMY, direction: C.DIRECTION_SOUTH, x: 2, y: 1 },
      { player: C.PLAYER_OPEN, direction: C.DIRECTION_NORTH, x: 0, y: 2 },
      { player: C.PLAYER_OPEN, direction: C.DIRECTION_NORTH, x: 1, y: 2 },
      { player: C.PLAYER_OPEN, direction: C.DIRECTION_NORTH, x: 2, y: 2 }
    ]
  };

  // rotate = (direction, board) => {
  //   const newBoard = board.map(
  //     tile =>
  //       tile.player === "user" ? { ...tile, direction: direction } : tile
  //   );
  //   return newBoard;
  // };

  // Test movement of Player
  move = e => {
    let direction = "";
    switch (e.key) {
      case "ArrowRight":
        direction = C.DIRECTION_EAST;
        console.log("clockwise");
        break;
      case "ArrowUp":
        direction = C.DIRECTION_NORTH;
        console.log("up");
        break;
      case "ArrowDown":
        direction = C.DIRECTION_SOUTH;
        console.log("down");
        break;
      case "ArrowLeft":
        direction = C.DIRECTION_WEST;
        console.log("counterClockwise");
        break;
      default:
        break;
    }
    const newBoard = this.state.tiles.map(
      tile =>
        tile.player === C.PLAYER_USER ? { ...tile, direction: direction } : tile
    );
    this.setState({
      tiles: newBoard
    });
  };

  componentDidMount() {
    window.addEventListener("keydown", this.move);
    console.log(JSON.stringify(this.state.tiles));
  }
  render() {
    console.log(this.state.tiles);
    return (
      <div className="board">
        {this.state.tiles.map(t =>
          <Tile
            key={`${t.x}-${t.y}`}
            player={t.player}
            direction={t.direction}
            x={t.x}
            y={t.y}
          />
        )}
      </div>
    );
  }
}

export default GameBoard;
