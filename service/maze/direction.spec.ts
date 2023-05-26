import { Direction, separateOneDirectionAtRandom } from './direction'

describe('separateOneDirectionAtRandom', () => {
  it('returns expected values', () => {
    const directions = Object.values(Direction);
    const {single, remainder} = separateOneDirectionAtRandom();
    expect(directions).toContain(single);
    expect(remainder).not.toContain(single);
    const mergeResult = [ ...remainder, single ];
    expect(directions.sort()).toEqual(mergeResult.sort());
  })
})
