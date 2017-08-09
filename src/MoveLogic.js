import * as C from "./Constants.js";

export function rotate(input, us) {
  // input == usermove, us == UserState
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
  return newDirection;
}

export function move(us, gb) {
  // input = usermove, us == userState, gb  == gameBoard
  var targetData = {
    Player: "",
    Direction: "",
    XPos: "",
    YPos: ""
  };
  var valid = true;

  // Checking for out of bounds moves.
  if (us.x === 0 && us.direction === C.DIRECTION_WEST) {
    valid = false;
    console.log(`Cant move ${us.direction}`);
  } else if (us.x === 2 && us.direction === C.DIRECTION_EAST) {
    valid = false;
    console.log(`Cant move ${us.direction}`);
  } else if (us.y === 0 && us.direction === C.DIRECTION_NORTH) {
    valid = false;
    console.log(`Cant move ${us.direction}`);
  } else if (us.y === 2 && us.direction === C.DIRECTION_SOUTH) {
    valid = false;
    console.log(`Cant move ${us.direction}`);
  }

  // Gathering target position data.
  if (valid) {
    switch (us.direction) {
      case C.DIRECTION_NORTH:
        // Gather properties of tile South of current position
        gb.forEach(tile => {
          if (tile.x === us.x && tile.y === us.y - 1) {
            targetData.XPos = tile.x;
            targetData.YPos = tile.y;
            targetData.Direction = tile.direction;
            targetData.Player = tile.player;
          }
        });
        console.log(targetData);
        break;
      case C.DIRECTION_SOUTH:
        // Gather properties of tile North of current position
        gb.forEach(tile => {
          if (tile.x === us.x && tile.y === us.y + 1) {
            targetData.XPos = tile.x;
            targetData.YPos = tile.y;
            targetData.Direction = tile.direction;
            targetData.Player = tile.player;
          }
        });
        console.log(targetData);
        break;
      case C.DIRECTION_EAST:
        //Gather properties of tile West of current position
        gb.forEach(tile => {
          if (tile.x === us.x + 1 && tile.y === us.y) {
            targetData.XPos = tile.x;
            targetData.YPos = tile.y;
            targetData.Direction = tile.direction;
            targetData.Player = tile.player;
          }
        });
        console.log(targetData);
        break;
      case C.DIRECTION_WEST:
        // Gather properties of tile East of current position
        gb.forEach(tile => {
          if (tile.x === us.x - 1 && tile.y === us.y) {
            targetData.XPos = tile.x;
            targetData.YPos = tile.y;
            targetData.Direction = tile.direction;
            targetData.Player = tile.player;
          }
        });
        console.log(targetData);
        break;
      default:
        break;
    }

    if (
      targetData.Direction === C.DIRECTION_NULL ||
      (targetData.targetPlayer === C.PLAYER_ENEMY &&
        targetData.targetDirection !== C.DIRECTION_NULL)
    ) {
      // then move the user to the target tile.
      targetData.player = C.PLAYER_USER;
      targetData.direction = us.direction;
      us.player = C.PLAYER_OPEN;
      us.direction = C.DIRECTION_NULL;
      // need to map or foreach new positions into gameboard then return it ----------- needs work
      const newBoard = gb.forEach(tile => {
        if (tile.x === targetData.XPos && tile.y === targetData.YPos) {
          tile.direction = targetData.direction;
          tile.player = targetData.player;
        }
      });
      return newBoard;
    } else {
      // bounce
    }
  }
}
