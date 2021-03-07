import { IVector } from '../typing/vector';
import { getVectorLength } from './getVectorLength';
import { scaleVector } from './scaleVector';

export const scaleVectorToLength = (vector: IVector, destLength: number) => {
  const length = getVectorLength(vector);
  return scaleVector(vector, destLength / length);
}