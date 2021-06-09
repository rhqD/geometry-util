import getRadianBetween from './getRadianBetween';
import getVectorLength from './getVectorLength';
import projectVectorTo from './projectVectorTo';
describe('projectVectorTo', () => {
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
    expect(projectVectorTo(vector, directionVector)).toEqual({
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
    const result = projectVectorTo(vector, directionVector);
    const resultLength = getVectorLength(result);
    expect(resultLength).toBeCloseTo(12 / 6 ** 0.5);
    expect(getRadianBetween(result, directionVector)).toBeCloseTo(0);
  });
});