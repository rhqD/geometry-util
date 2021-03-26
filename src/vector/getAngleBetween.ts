import { IVector } from "../types";
import getRadiusBetween from "./getRadiusBetween";
import radiusToAngle from "../common/radiusToAngle";

const getAngleBetween = (vector1: IVector, vector2: IVector): number => {
  const radius = getRadiusBetween(vector1, vector2);
  return radiusToAngle(radius);
};

export default getAngleBetween;