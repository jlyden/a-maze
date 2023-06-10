import { Room } from "./room";

export class Maze {
  private rooms: Room[];

  constructor() {
    this.rooms = [];
  }

  addRoom(room: Room): void {
    this.rooms.push(room);
  }

  getRooms(): Room[] {
    return this.rooms;
  }

  toString(): void {
    this.rooms.forEach(room => {
      room.toString() + '/n';
    });
  }
}