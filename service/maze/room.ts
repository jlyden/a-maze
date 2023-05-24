import { MapSite } from './map-site'

import { Direction } from './enums/direction'

export class Room extends MapSite {
  private roomNumber: number;
  private sides: [];

  constructor(roomNumber: number) {
    super();

    this.roomNumber = roomNumber;
    this.sides = [];
    // TODO: set sides?
  }

  enter(): void {
    alert('you are here!');
  }

  // TODO: Return type MapSize
  getSide(direction: Direction) {
    // TODO
  }

  setSide(direction: Direction, mapSite: MapSite): void {
    // TODO
  }
}