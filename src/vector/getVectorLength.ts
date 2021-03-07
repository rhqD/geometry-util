import { IVector } from '../typing/vector';
import sum from 'lodash.sum';
import map from 'lodash.map';
import values from 'lodash.values';

export const getVectorLength = (vector: IVector): number => Math.sqrt(sum(map(values(vector), v => v ** 2)));