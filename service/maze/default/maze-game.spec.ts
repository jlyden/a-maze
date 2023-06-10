import { MazeGame } from "./maze-game";

let mazeGame: MazeGame;

describe('createMaze', () => {
  beforeEach(() => {
    mazeGame = new MazeGame();
  })

  it('returns expected values', () => {
    const expected = {roomNumbers: [1,2]};
    const result = mazeGame.createMaze();
    expect(result).toEqual(expected);
  })
})