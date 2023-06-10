import { MazeGame } from "./maze-game";

let mazeGame: MazeGame;

describe('createMaze', () => {
  beforeEach(() => {
    mazeGame = new MazeGame();
  })

  it('creates maze with two rooms', () => {
    const testMaze = mazeGame.createMaze();
    const testMazeRooms = testMaze.getRooms();
    expect(testMazeRooms).toHaveLength(2);
  })
})