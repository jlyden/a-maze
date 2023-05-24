import { Door } from "./door";
import { Maze } from "./maze";
import { Room } from "./room";
import { Wall } from "./wall";

export class MazeGame {
  // TODO: return type Maze
  createMaze(numberOfRooms: number) { }

  makeMaze(): Maze {
    return new Maze();
  }

  makeRoom(roomNumber: number): Room {
    return new Room(roomNumber);
  }

  makeWall(): Wall {
    return new Wall();
  }

  makeDoor(roomOneNumber: number, roomTwoNumber: number): Door {
    return new Door(roomOneNumber, roomTwoNumber);
  } 
}