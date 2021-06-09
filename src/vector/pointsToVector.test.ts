import { IPoint } from "../interfaces";
import pointsToVector from "./pointsToVector";

describe('pointsToVector', () => {
  it('should correctly calculate a vector from two points in 1d', () => {
    const point1: IPoint = {
      x: 0,
    };
    const point2: IPoint = {
      x: 10,
    };
    const vector = pointsToVector(point1, point2);
    expect(vector).toEqual({
      x: 10,
    });
  });

  it('should correctly calculate a vector from two points in 2d', () => {
    const point1: IPoint = {
      x: 0,
      y: 0,
    };
    const point2: IPoint = {
      x: 10,
      y: 10,
    };
    const vector = pointsToVector(point1, point2);
    expect(vector).toEqual({
      x: 10,
      y: 10,
    });
  });

  it('should correctly calculate a vector from two points in 3d', () => {
    const point1: IPoint = {
      x: 0,
      y: 0,
      z: 0,
    };
    const point2: IPoint = {
      x: 10,
      y: 10,
      z: 10,
    };
    const vector = pointsToVector(point1, point2);
    expect(vector).toEqual({
      x: 10,
      y: 10,
      z: 10,
    });
  });

  it('should be able to calculate a vector from two points with different dimensions', () => {
    const point1: IPoint = {
      x: 10,
      y: 20,
    };
    const point2: IPoint = {
      x: 0,
      z: 30,
    };
    const vector = pointsToVector(point1, point2);
    expect(vector).toEqual({
      x: -10,
      y: -20,
      z: 30,
    });
  })

})