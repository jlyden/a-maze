import { MapSite } from './map-site'

import { Direction } from '../common/direction'

export class Room extends MapSite {
  private _roomNumber: number;
  private _sides: [];

  constructor(roomNumber: number) {
    super();

    this._roomNumber = roomNumber;
    this._sides = [];
    // TODO: set sides?
  }

  enter(): void {
    // TODO
  }

  // TODO: Return type MapSize
  getSide(direction: Direction) {
    // TODO
  }

  setSide(direction: Direction, mapSite: MapSite): void {
    // TODO
  }
}