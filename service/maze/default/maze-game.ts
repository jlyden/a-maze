import { separateOneDirectionAtRandom } from '../direction'

import { Door } from "./door";
import { Maze } from "./maze";
import { Room } from "./room";
import { Wall } from "./wall";

export class MazeGame {
  /**
   * Creates a two-room Maze
   * Phase 2: create Maze of size numberOfRooms
   *
   * @returns Maze
   */
  createMaze(): Maze {
    var aMaze = this.makeMaze();

    var roomOne = this.makeRoom(1);
    var roomTwo = this.makeRoom(2);
    var theDoor = this.makeDoor(roomOne.id, roomTwo.id);

    this.setWallsAndDoor(roomOne, theDoor);
    this.setWallsAndDoor(roomTwo, theDoor);

    aMaze.addRoom(roomOne.id);
    aMaze.addRoom(roomTwo.id);

    return aMaze;
  }

  private setWallsAndDoor(room: Room, door: Door): void {
    const {single, remainder} = separateOneDirectionAtRandom();
    room.setSide(single, door);
    remainder.forEach(direction => {
      room.setSide(direction, this.makeWall());
    })
  }

  private makeMaze(): Maze {
    return new Maze();
  }

  protected makeRoom(roomNumber: number): Room {
    return new Room(roomNumber);
  }

  protected makeWall(): Wall {
    return new Wall();
  }

  private makeDoor(roomOneNumber: number, roomTwoNumber: number): Door {
    return new Door(roomOneNumber, roomTwoNumber);
  } 
}