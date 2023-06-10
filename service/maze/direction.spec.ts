import { assert } from 'console';
import { Direction, separateOneDirectionAtRandom } from './direction'

const directions = Object.values(Direction);

describe('separateOneDirectionAtRandom', () => {
  it('returns one direction separate from the other three, no dups', () => {
    const {single, remainder} = separateOneDirectionAtRandom();
    expect(directions).toContain(single);
    expect(remainder).not.toContain(single);
    const mergeResult = [ ...remainder, single ];
    expect(directions.sort()).toEqual(mergeResult.sort());
  })

  it('returns a "single" direction at random', () => {
    const allTheSingles = [...Array(5).keys()].map(() => {
      return separateOneDirectionAtRandom().single;
    });
    const uniqueResults = new Set(allTheSingles);
    expect(uniqueResults.size).toBeGreaterThan(1);
  })
})
