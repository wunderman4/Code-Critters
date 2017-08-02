import React from "react";
import PropTypes from "prop-types";

class Tile extends React.Component {
  state = {
    player: null,
    direction: null,
    x: null,
    y: null
  };

  componentDidMount() {
    // stuff goes here
  }
  render(props) {
    return (
      <div key={`${props.x}-${props.y}`} className="Square">
        <div className={`circle ${props.player} ${props.direction}`} />
      </div>
    );
  }
}

Tile.PropTypes = {
  player: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
};

export default Tile;
