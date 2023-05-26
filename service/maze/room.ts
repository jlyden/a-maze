import { MapSite } from './map-site'

import { Direction } from './direction'

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
      north: null,
      east: null,
      south: null,
      west: null,
    };
  }

  enter(): void {
    alert('you are here!');
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
}