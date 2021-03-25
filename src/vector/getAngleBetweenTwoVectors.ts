import { IVector } from "../types";
import getRadiusBetweenVectors from "./getRadiusBetweenVectors";
import radiusToAngle from "./radiusToAngle";

const getAngleBetweenTwoVectors = (vector1: IVector, vector2: IVector): number => {
  const radius = getRadiusBetweenVectors(vector1, vector2);
  return radiusToAngle(radius);
};

export default getAngleBetweenTwoVectors;