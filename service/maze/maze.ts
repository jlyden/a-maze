import { MapSite } from './map-site'
import { Room } from './room'

export class Maze {
  private roomNumbers: number[];

  constructor() {
    this.roomNumbers = [];
  }

  addRoom(roomNumber: number): void {
    this.roomNumbers.push(roomNumber);
  }

  // TODO: return type Room
  // TODO: does this belong here?å
  getRoomInMaze(roomNumber: number) {

  }
}