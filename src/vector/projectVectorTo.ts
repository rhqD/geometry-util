import { IDirection, IVector } from "../interfaces";
import getDotProduct from "./getDotProduct";
import getVectorLength from "./getVectorLength";
import scaleVector from "./scaleVector";
import scaleVectorTo from "./scaleVectorTo";

const projectVectorTo = (vector: IVector, normalVector: IDirection) => {
  const dotProduct = getDotProduct(vector, normalVector);
  const finalLength = Math.abs(dotProduct) / getVectorLength(normalVector);
  const tempResult = scaleVectorTo(normalVector, finalLength);
  if (dotProduct > 0) {
    return tempResult
  }
  return scaleVector(tempResult, -1);
}

export default projectVectorTo;