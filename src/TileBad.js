import React from "react";
import PropTypes from "prop-types";

// Class that has state, doesnt update anything

// Can either have a circle with enemy or circle with user
const Square = props =>
  <div key={`${props.x}-${props.y}`} className="Square">
    <div className={`circle ${props.player} ${props.direction}`} />
  </div>;

Square.PropTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  player: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired
};

// const Tile = props => {
//   return (
//     <Square x={props.x} y={props.y}>
//       <Circle player={props.player} direction={props.direction} />
//     </Square>
//   );
// };

class Tile extends React.Component {
  state = {
    // circle: null,
    direction: null,
    player: null,
    x: null,
    y: null
  };
  componentDidMount() {
    //Update stuff here
  }

  render() {
    return (
      <Square
        x={this.state.x}
        y={this.state.y}
        player={this.state.player}
        direction={this.state.direction}
      />
    );
  }
}

export default Tile;
