import { IVector } from "../types"
import getRadiusBetween from "./getRadiusBetween";
import round from "../common/round";

const isParallel = (...vectors: IVector[]) => {
  return vectors.every((vector: IVector, index: number) => {
    if (index === 0) {
      return true;
    }
    return isTwoVectorParallel(vector, vectors[index - 1])
  });
}

const isTwoVectorParallel = (vector1: IVector, vector2: IVector) => {
  const radiusBetweenVectors = round(getRadiusBetween(vector1, vector2), 4);
  return radiusBetweenVectors === 0 || radiusBetweenVectors === round(Math.PI);
}

export default isParallel;