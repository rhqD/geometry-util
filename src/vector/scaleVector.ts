import { IVector } from '../typing/vector';
import mapValues from 'lodash.mapvalues';

export const scaleVector = (vector: IVector, scale: number) => mapValues(vector, v => v * scale);