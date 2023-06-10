export class Maze {
  private roomNumbers: number[];

  constructor() {
    this.roomNumbers = [];
  }

  addRoom(roomNumber: number): void {
    this.roomNumbers.push(roomNumber);
  }
}