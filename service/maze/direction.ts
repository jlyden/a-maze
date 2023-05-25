export enum Direction {
  NORTH,
  EAST,
  SOUTH,
  WEST,
}

export type DirectionString = keyof typeof Direction;

export function separateOneDirectionAtRandom() {
  const remainder = Object.keys(Direction);
  const randomIndex = Math.floor(Math.random() * remainder.length);
  const single = remainder[randomIndex];
  remainder.splice(randomIndex, 1);
  return {single, remainder};
}