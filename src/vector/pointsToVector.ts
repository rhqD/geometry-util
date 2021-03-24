import { IPoint, IVector } from '../typing/vector';
import keys from 'lodash.keys';
import union from 'lodash.union';
import zipObject from 'lodash.zipobject';
import map from 'lodash.map';
import get from 'lodash.get';

export const pointsToVector = (start: IPoint, end: IPoint): IVector => {
  const allKeys: string[] = union(keys(start), keys(end));
  const values: number[] = map(allKeys, (k: string) => get(end, k, 0) - get(start, k, 0));
  return zipObject(allKeys, values) as IVector;
}