import { IVector } from "../types";
import getDotProduct from "./getDotProduct";
import getVectorLength from "./getVectorLength";
import round from '../common/round';

const getRadianBetween = (vector1: IVector, vector2: IVector): number => {
  const product = (getVectorLength(vector1) * getVectorLength(vector2));
  if (product == 0) {
    return 0;
  }
  return Math.acos(
    round(getDotProduct(vector1, vector2) / product),
  );
}

export default getRadianBetween;