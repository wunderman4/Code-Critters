import React from "react";
import PropTypes from "prop-types";

// This is the second try where I made it a stateless component. I get the classnames for player, direction,
//

const Tile = props => {
  return (
    <div key={`${props.x}-${props.y}`} className="square">
      <div className={`circle ${props.player} ${props.direction}`} />
    </div>
  );
};

Tile.PropTypes = {
  player: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
};

export default Tile;
