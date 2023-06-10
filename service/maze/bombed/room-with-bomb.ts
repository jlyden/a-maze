import { Room } from "../default/room";

export class RoomWithBomb extends Room {
  private hasBomb: boolean;

  constructor(roomNumber: number) {
    super(roomNumber);

    this.hasBomb = (Math.random() < 0.5);
  }

  display(): string {
    const bombStatus = this.hasBomb ? 'and a' : 'but no';

    return super.display() + ` and ${bombStatus} bomb!`;
  }
}