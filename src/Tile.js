import React from "react";
import PropTypes from "prop-types";

// Can either have a circle with enemy or circle with user
const Square = props => {
  <div key={`${props.x}-${props.y}`} className="Square">
    <div className="circle ${props.player}"></div>
  </div>;
};
Square.PropTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  circle: PropTypes.object,
  player: PropTypes.string
};

// Enemy contains a circle with a bug graphic
const Circle = props => {
  <div className={`circle ${props.player}`} />;
};
Circle.PropTypes = {
  player: PropTypoes.object.isRequired
};

class Tile extends React.Component {
  state = {
    circle: null,
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
        circle={} />
    );
  }
}
