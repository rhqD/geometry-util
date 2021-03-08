import { IPoint } from "../typing/vector";
import { pointsToVector } from "./pointsToVector";

describe('pointsToVector', () => {
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
})