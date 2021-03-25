import { IPoint } from '../types';
import getMidPoint from './getMidPoint';

describe('getMidPoint', () => {
  it('should correctly calculate the mid point between two 1d points', () => {
    const point1: IPoint = { x: 1 };
    const point2: IPoint = { x: 3 };
    const midPoint = getMidPoint(point1, point2);
    expect(midPoint).toEqual({ x: 2 });
  });

  it('should correctly calculate the mid point between two 2d points', () => {
    const point1: IPoint = { x: 1, y: 5 };
    const point2: IPoint = { x: 3, y: 2 };
    const midPoint = getMidPoint(point1, point2);
    expect(midPoint).toEqual({ x: 2, y: 3.5 });
  });

  it('should correctly calculate the mid point between two 3d points', () => {
    const point1: IPoint = { x: 1, y: 5, z: 6 };
    const point2: IPoint = { x: 3, y: 2, z: -1 };
    const midPoint = getMidPoint(point1, point2);
    expect(midPoint).toEqual({ x: 2, y: 3.5, z: 2.5 });
  });

  it('should correctly calculate the mid point when one of the point is empty', () => {
    const point1: IPoint = {};
    const point2: IPoint = { x: 4, y: 5 };
    const midPoint = getMidPoint(point1, point2);
    expect(midPoint).toEqual({
      x: 2,
      y: 2.5
    });
  });

  it('should correctly calculate the mid point between two empty points', () => {
    const point1: IPoint = {};
    const point2: IPoint = {};
    const midPoint = getMidPoint(point1, point2);
    expect(midPoint).toEqual({});
  });

  it('should correctly calculate the mid point between two points with different dimensions', () => {
    const point1: IPoint = { x: 1, z: 4};
    const point2: IPoint = { y: 3, x: 3};
    const midPoint = getMidPoint(point1, point2);
    expect(midPoint).toEqual({
      x: 2,
      y: 1.5,
      z: 2
    });
  });
});