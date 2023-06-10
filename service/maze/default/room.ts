import { MapSite } from '../map-site'

import { Direction } from '../direction'

type Sides = {
  [direction in Direction]: MapSite | null;
};

export class Room extends MapSite {
  private roomNumber: number;
  private sides: Sides;

  constructor(roomNumber: number) {
    super();

    this.roomNumber = roomNumber;
    this.sides = {
      [Direction.NORTH]: null,
      [Direction.EAST]: null,
      [Direction.SOUTH]: null,
      [Direction.WEST]: null,
    };
  }

  enter(): void {
    alert(`you have entered room number: ${this.id}`);
  }

  display(): string {
    return `room ${this.roomNumber} has sides: ${JSON.stringify(this.sides)}`;
  }

  get id(): number {
    return this.roomNumber;
  }

  getSide(direction: Direction): MapSite|null {
    return this.sides[direction];
  }

  setSide(direction: Direction, mapSite: MapSite): void {
    this.sides[direction] = mapSite;
  }

  toString(): string {
    return `room ${this.roomNumber}: ${JSON.stringify(this.sides)}`;
  }
}