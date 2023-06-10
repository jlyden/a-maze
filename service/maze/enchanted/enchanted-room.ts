import { Room } from "../default/room";

export class EnchantedRoom extends Room {
  private castSpell: Function;

  constructor(roomNumber: number, castSpell: Function) {
    super(roomNumber);

    this.castSpell = castSpell;
  }

  display(): string {
    return 'enchanted ' + super.display();
  }
}