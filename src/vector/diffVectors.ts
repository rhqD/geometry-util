import { IVector } from "../types";
import keys from 'lodash/keys';
import union from 'lodash/union';
import zipObject from 'lodash/zipObject';
import map from 'lodash/map';
import get from 'lodash/get';

const diffVectors = (a: IVector = {}, b: IVector = {}) => {
  const allKeys: string[] = union(keys(a), keys(b));
  const values: number[] = map(allKeys, (k: string) => get(a, k, 0) - get(b, k, 0));
  return zipObject(allKeys, values) as IVector;
}

export default diffVectors;