import getRadiusBetween from './getRadiusBetween';
import getVectorLength from './getVectorLength';
import projectVectorAt from './projectVectorAt';
describe('projectVectorAt', () => {
  it('should correctly calculate projected vector', () => {
    const vector = {
      x: 1,
      y: 3,
      z: 5,
    };
    const directionVector = {
      x: 0,
      y: 0,
      z: 1,
    };
    expect(projectVectorAt(vector, directionVector)).toEqual({
      x: 0,
      y: 0,
      z: 5,
    });
  });

  it('should correctly calculate projected vector', () => {
    const vector = {
      x: 1,
      y: 3,
      z: 5,
    };
    const directionVector = {
      x: 1,
      y: 2,
      z: 1,
    };
    const result = projectVectorAt(vector, directionVector);
    const resultLength = getVectorLength(result);
    expect(resultLength).toBeCloseTo(12 / 6 ** 0.5);
    expect(getRadiusBetween(result, directionVector)).toBeCloseTo(0);
  });
});