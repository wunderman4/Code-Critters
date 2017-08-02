import React, { Component } from "react";
import Tile from "./Tile.js";

class GameBoard extends Component {
  state = {
    // concider valid actio nstate to pass in actions and check if valid
    // pass in state,
    tiles: [
      { player: "", direction: "north", x: 0, y: 0 },
      { player: "enemy", direction: "north", x: 1, y: 0 },
      { player: "enemy", direction: "north", x: 2, y: 0 },
      { player: "", direction: "north", x: 0, y: 1 },
      { player: "user", direction: "north", x: 1, y: 1 },
      { player: "", direction: "north", x: 2, y: 1 },
      { player: "enemy", direction: "north", x: 0, y: 2 },
      { player: "", direction: "north", x: 1, y: 2 },
      { player: "enemy", direction: "north", x: 2, y: 2 }
    ]
  };

  rotate = board => {
    board.map(tile => {
      if (tile.player === "user") {
        tile.direction = "east";
      }
      this.setState(() => {
        return {
          tiles: board
        };
      });
    });
  };

  // Test movement of Player
  move = e => {
    //console.log(e.key);
    switch (e.key) {
      case "ArrowRight":
        this.rotate(this.state.tiles);
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
