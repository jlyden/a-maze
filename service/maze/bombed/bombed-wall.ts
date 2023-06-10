import { Wall } from "../default/wall";

export class BombedWall extends Wall {
  display(): string {
    return 'this is a bombed wall';
  }
}