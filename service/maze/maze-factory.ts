import { BombedMazeGame } from "./bombed/bombed-maze-game";
import { MazeGame } from "./default/maze-game";
import { EnchantedMazeGame } from "./enchanted/enchanted-maze-game";

export enum MazeTypes {
  DEFAULT = 'default',
  BOMBED = 'bombed',
  ENCHANTED = 'enchanted',
}

export class MazeFactory {
  getMaze(mazeType: MazeTypes) {
    switch(mazeType) {
      case MazeTypes.BOMBED:
        return new BombedMazeGame().createMaze();
      case MazeTypes.ENCHANTED:
        return new EnchantedMazeGame().createMaze();
      case MazeTypes.DEFAULT:
      default:
        return new MazeGame().createMaze();
    }
  }
}