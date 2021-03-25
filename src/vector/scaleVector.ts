import { IVector } from '../types/vector';
import mapValues from 'lodash/mapvalues';

const scaleVector = (vector: IVector, scale: number) => mapValues(vector, v => v * scale);
export default scaleVector;