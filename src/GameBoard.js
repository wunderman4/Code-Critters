import React, { Component } from "react";
import * as C from "./Constants.js";
import Tile from "./Tile.js";

class GameBoard extends Component {
  constructor() {
    super();
    this.state = {
      // concider valid actio nstate to pass in actions and check if valid
      // pass in state,
      tiles: [
        { player: C.PLAYER_EMPTY, direction: C.DIRECTION_NORTH, x: 0, y: 0 },
        { player: C.PLAYER_ENEMY, direction: C.DIRECTION_NORTH, x: 1, y: 0 },
        { player: C.PLAYER_ENEMY, direction: C.DIRECTION_NORTH, x: 2, y: 0 },
        { player: C.PLAYER_EMPTY, direction: C.DIRECTION_NORTH, x: 0, y: 1 },
        { player: "user", direction: C.DIRECTION_NORTH, x: 1, y: 1 },
        { player: C.PLAYER_EMPTY, direction: C.DIRECTION_NORTH, x: 2, y: 1 },
        { player: C.PLAYER_ENEMY, direction: C.DIRECTION_NORTH, x: 0, y: 2 },
        { player: C.PLAYER_EMPTY, direction: C.DIRECTION_NORTH, x: 1, y: 2 },
        { player: C.PLAYER_ENEMY, direction: C.DIRECTION_NORTH, x: 2, y: 2 }
      ]
    };
    this.rotate.bind(this);
  }
  rotate = board => {
    const newBoard = board.map(
      tile =>
        tile.player === "user" ? { ...tile, direction: C.DIRECTION_EAST } : tile

      //   this.setState(() => {
      //     return {
      //       tiles: board
      //     };
      //   });
    );
    return newBoard;
  };

  // Test movement of Player
  move = e => {
    //console.log(e.key);
    switch (e.key) {
      case "ArrowRight":
        console.log(this.state);
        const updateTiles = this.rotate(this.state.tiles);
        console.log(updateTiles);
        this.setState({
          tiles: updateTiles
        });

        console.log("right");
        break;
      case "ArrowUp":
        console.log("up");
        break;
      case "ArrowDown":
        console.log("down");
        break;
      case "ArrowLeft":
        console.log("left");
        break;
      default:
        break;
    }
  };
  componentDidMount() {
    // window. needs to be removed along with move
    window.addEventListener("keydown", this.move);
    console.log(JSON.stringify(this.state.tiles));
  }
  render() {
    console.log(this.state.tiles);
    return (
      <div className="board">
        {this.state.tiles.map(t =>
          // <div key={`${t.x}-${t.y}`} className="square">
          //   <div className={` north circle ${t.player}`} />
          // </div>
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
