import React, { Component } from "react";
import * as C from "./Constants.js";
import Tile from "./Tile.js";
import { rotate, move } from "./MoveLogic.js";

class GameBoard extends Component {
  state = {
    tiles: [
      { player: C.PLAYER_ENEMY, direction: C.DIRECTION_NORTH, x: 0, y: 0 },
      { player: C.PLAYER_OPEN, direction: C.DIRECTION_NULL, x: 1, y: 0 },
      { player: C.PLAYER_OPEN, direction: C.DIRECTION_NULL, x: 2, y: 0 },
      { player: C.PLAYER_ENEMY, direction: C.DIRECTION_EAST, x: 0, y: 1 },
      { player: C.PLAYER_OPEN, direction: C.DIRECTION_NULL, x: 1, y: 1 },
      { player: C.PLAYER_ENEMY, direction: C.DIRECTION_SOUTH, x: 2, y: 1 },
      { player: C.PLAYER_OPEN, direction: C.DIRECTION_NULL, x: 0, y: 2 },
      { player: C.PLAYER_OPEN, direction: C.DIRECTION_NULL, x: 1, y: 2 },
      { player: C.PLAYER_USER, direction: C.DIRECTION_NORTH, x: 2, y: 2 }
    ]
  };

  // Entry point for user moves, currently set to test movement of Player.
  userChoice = e => {
    var userState = ""; // used to pass user state to additonal methods.;
    var currentBoard = this.state.tiles;

    this.state.tiles.forEach(tile => {
      if (tile.player === C.PLAYER_USER) {
        userState = tile;
      }
    });

    var direction = userState.direction; // used to set new direction of user.

    switch (e.key) {
      case "ArrowRight":
        direction = rotate(C.DIRECTION_CLOCKWISE, userState);
        break;
      case "ArrowUp":
        const updatedBoard = move(userState, currentBoard);
        console.log(direction);
        break;
      case "ArrowLeft":
        direction = rotate(C.DIRECTION_COUNTERCLOCKWISE, userState);
        break;
      default:
        direction = userState.direction;
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
    window.addEventListener("keydown", this.userChoice);
    console.log(JSON.stringify(this.state.tiles));
  }
  render() {
    //console.log(this.state.tiles);
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
