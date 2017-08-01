import React, { Component } from "react";

class GameBoard extends Component {
  state = {
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

  // Test movement of Player
  move = e => {
    //console.log(e.key);
    switch (e.key) {
      case "ArrowRight":
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
        {this.state.tiles.map(tile =>
          <div key={`${tile.x}-${tile.y}`} className="square">
            <div className={`circle ${tile.player}`} />
          </div>
        )}
      </div>
    );
  }
}

export default GameBoard;
