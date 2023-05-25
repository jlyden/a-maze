import { MapSite } from './map-site'

import { DirectionString } from './direction'

type Sides = {
  [direction in DirectionString]: MapSite | null;
};

export class Room extends MapSite {
  private roomNumber: number;
  private sides: Sides;

  constructor(roomNumber: number) {
    super();

    this.roomNumber = roomNumber;
    this.sides = {
      NORTH: null,
      EAST: null,
      SOUTH: null,
      WEST: null,
    };
  }

  enter(): void {
    alert('you are here!');
  }

  get id(): number {
    return this.roomNumber;
  }

  getSide(direction: DirectionString): MapSite|null {
    return this.sides[direction];
  }

  setSide(direction: DirectionString, mapSite: MapSite): void {
    this.sides[direction] = mapSite;
  }
}