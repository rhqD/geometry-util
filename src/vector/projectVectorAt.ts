import { IDirection, IVector } from "../types";
import getDotProduct from "./getDotProduct";
import getVectorLength from "./getVectorLength";
import scaleVector from "./scaleVector";
import scaleVectorTo from "./scaleVectorTo";

const projectVectorAt = (vector: IVector, normalVector: IDirection) => {
  const dotProduct = getDotProduct(vector, normalVector);
  const finalLength = Math.abs(dotProduct) / getVectorLength(normalVector);
  const tempResult = scaleVectorTo(normalVector, finalLength);
  if (dotProduct > 0) {
    return tempResult
  }
  return scaleVector(tempResult, -1);
}

export default projectVectorAt;