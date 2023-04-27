/**
 * This function determines the next index for the computer player to hit in a battleship game based on
 * the last hit, ship orientation, and coordinates already picked.
 * @param shipIdx - The index of the current ship position on the game grid.
 * @param lastHit - The index of the last hit made by the player's ship. If there was no last hit, it
 * will be null or undefined.
 * @param shipOrientation - The orientation of the ship, either "horizontal" or "vertical".
 * @param coordinatesPicked - An object containing the coordinates that have already been picked by the
 * player. The keys of the object are the coordinates in the form of strings (e.g. "A1", "B3") and the
 * values are boolean values indicating whether the coordinate has been picked or not.
 * @returns The function `determineNextIndex` returns either a string representing the next index to
 * target, an empty string if there are no more possible targets in the current orientation, or it
 * recursively calls itself with an empty string as the `lastHit` parameter to try to find a new
 * orientation to target.
 */
import selectRandomElement from "./selectRandomElement";
import { up, down, right, left } from "./matrixDirections";

const determineNextIndex = (
  shipIdx,
  lastHit,
  shipOrientation,
  coordinatesPicked
) => {
  const possibilities = [];
  const gridIdx = lastHit || shipIdx;
  if (!shipOrientation) {
    if (gridIdx[1] < 9 && !(right(gridIdx) in coordinatesPicked)) {
      possibilities.push(right(gridIdx));
    }
    if (gridIdx[1] > 0 && !(left(gridIdx) in coordinatesPicked)) {
      possibilities.push(left(gridIdx));
    }
    if (gridIdx[0] < 9 && !(down(gridIdx) in coordinatesPicked)) {
      possibilities.push(down(gridIdx));
    }
    if (gridIdx[0] > 0 && !(up(gridIdx) in coordinatesPicked)) {
      possibilities.push(up(gridIdx));
    }
  } else {
    if (shipOrientation === "horizontal") {
      if (gridIdx[1] < 9 && !(right(gridIdx) in coordinatesPicked)) {
        possibilities.push(right(gridIdx));
      }
      if (gridIdx[1] > 0 && !(left(gridIdx) in coordinatesPicked)) {
        possibilities.push(left(gridIdx));
      }
    } else {
      if (gridIdx[0] < 9 && !(down(gridIdx) in coordinatesPicked)) {
        possibilities.push(down(gridIdx));
      }
      if (gridIdx[0] > 0 && !(up(gridIdx) in coordinatesPicked)) {
        possibilities.push(up(gridIdx));
      }
    }
  }
  if (possibilities.length === 0 && lastHit)
    return determineNextIndex(shipIdx, "", shipOrientation, coordinatesPicked);
  else if (possibilities.length === 0 && shipOrientation) return "";
  else return selectRandomElement(possibilities);
};

export default determineNextIndex;
