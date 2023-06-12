import { Room } from "./default/room";
import { MazeFactory, MazeTypes } from "./maze-factory"

let mazeFactory: MazeFactory;

describe('MazeFactory', () => {
  beforeAll(() => {
    mazeFactory = new MazeFactory();
  })

  it.each([
    [MazeTypes.BOMBED, 'hasBomb'],
    [MazeTypes.ENCHANTED, 'castSpell'],
    [MazeTypes.DEFAULT, ''],
  ])('returns a Maze for each type', (mazeType: MazeTypes, extraAttribute: string) => {
    const newMaze = mazeFactory.getMaze(mazeType);
    const sampleRoom = newMaze.getRooms()[0];
    verifyStandardRoomProps(sampleRoom);
    if (extraAttribute) {
      expect(sampleRoom).toHaveProperty(extraAttribute);
    }
  })
})

function verifyStandardRoomProps(room: Room): void {
  expect(room).toHaveProperty('roomNumber');
  expect(room).toHaveProperty('sides');
}