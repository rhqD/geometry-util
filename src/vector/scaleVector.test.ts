import scaleVector from './scaleVector';

describe('scaleVector', () => {
  it('should correctly scale a 1d vector', () => {
    const vector = {
      x: 2
    };
    const scaledVector =  scaleVector(vector, 2);
    expect(scaledVector).toEqual({
      x: 4
    });
  });

  it('should correctly scale a 2d vector', () => {
    const vector = {
      x: 2,
      y: 3
    };
    const scaledVector =  scaleVector(vector, 2);
    expect(scaledVector).toEqual({
      x: 4,
      y: 6,
    });
  });

  it('should correctly scale a 3d vector', () => {
    const vector = {
      x: 2,
      y: 3,
      z: 5
    };
    const scaledVector =  scaleVector(vector, 2);
    expect(scaledVector).toEqual({
      x: 4,
      y: 6,
      z: 10
    });
  });

  it('should correctly scale a vector with zero scale', () => {
    const vector = {
      x: 2,
      y: 3
    };
    const scaledVector =  scaleVector(vector, 0);
    expect(scaledVector).toEqual({
      x: 0,
      y: 0,
    });
  });

  it('should correctly scale a vector with negative scale', () => {
    const vector = {
      x: 2,
      y: 3
    };
    const scaledVector =  scaleVector(vector, -3);
    expect(scaledVector).toEqual({
      x: -6,
      y: -9,
    });
  });

  it('should correctly scale a zero vector', () => {
    const vector = {
      x: 0,
      y: 0
    };
    const scaledVector =  scaleVector(vector, -3);
    expect(scaledVector).toEqual({
      x: -0,
      y: -0,
    });
  });

  it('should correctly scale a empty vector', () => {
    const vector = {};
    const scaledVector =  scaleVector(vector, -3);
    expect(scaledVector).toEqual({});
  });
  
});
