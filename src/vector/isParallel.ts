import { IVector } from "../interfaces"
import getRadianBetween from "./getRadianBetween";
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
  const radianBetweenVectors = round(getRadianBetween(vector1, vector2), 4);
  return radianBetweenVectors === 0 || radianBetweenVectors === round(Math.PI);
}

export default isParallel;