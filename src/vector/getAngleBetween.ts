import { IVector } from "../types";
import getRadianBetween from "./getRadianBetween";
import radianToAngle from "../common/radianToAngle";

const getAngleBetween = (vector1: IVector, vector2: IVector): number => {
  const radian = getRadianBetween(vector1, vector2);
  return radianToAngle(radian);
};

export default getAngleBetween;