import { MazeGame } from "../default/maze-game";
import { Room } from "../default/room";
import { EnchantedRoom } from "./enchanted-room";

type Spell = (spell: string) => string;

export class EnchantedMazeGame extends MazeGame {
  protected makeRoom(roomNumber: number): Room {
    return new EnchantedRoom(roomNumber, this.castSpell)
  }

  castSpell: Spell = (spell: string) => {
    return `*-*-*-* Spell cast: ${spell} *-*-*-*`;
  }
}