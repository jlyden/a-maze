import { MazeGame } from '../default/maze-game'
import { Room } from '../default/room';
import { Wall } from '../default/wall';
import { BombedWall } from './bombed-wall';
import { RoomWithBomb } from './room-with-bomb';

export class BombedMazeGame extends MazeGame {
  protected makeWall(): Wall {
    return new BombedWall();
  }

  protected makeRoom(roomNumber: number): Room {
    return new RoomWithBomb(roomNumber);
  }
}