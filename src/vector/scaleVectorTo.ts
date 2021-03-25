import { IVector } from '../types/vector';
import getVectorLength from './getVectorLength';
import scaleVector from './scaleVector';

const scaleVectorTo = (vector: IVector, destLength: number) => {
  const length = getVectorLength(vector);
  if (length === 0) {
    throw new Error('can\'t scale a empty or zero vector to certain length');
  }
  return scaleVector(vector, destLength / length);
}

export default scaleVectorTo;