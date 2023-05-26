export enum Direction {
  NORTH = 'north',
  EAST = 'east',
  SOUTH = 'south',
  WEST = 'west',
}

export function separateOneDirectionAtRandom() {
  const remainder = Object.values(Direction);
  const randomIndex = Math.floor(Math.random() * remainder.length);
  const single = remainder[randomIndex];
  remainder.splice(randomIndex, 1);
  return {single, remainder};
}