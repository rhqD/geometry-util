import { IPoint } from "../interfaces";
import pointsToVector from "../vector/pointsToVector";
import getVectorLength from "../vector/getVectorLength";

const lengthBetween = (point1: IPoint, point2: IPoint) => {
  const vector = pointsToVector(point1, point2);
  return getVectorLength(vector);
};

export default lengthBetween;