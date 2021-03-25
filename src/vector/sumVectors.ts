import { IVector } from "../types"
import keys from 'lodash.keys';
import union from 'lodash.union';
import zipObject from 'lodash.zipobject';
import map from 'lodash.map';
import get from 'lodash.get';

const sumVectors = (...vectors: IVector[]) => {
  return vectors.reduce((result, curr) => sumTwoVectors(result, curr), {});
}

const sumTwoVectors = (vector1: IVector, vector2: IVector) => {
  const allKeys: string[] = union(keys(vector1), keys(vector2));
  const values: number[] = map(allKeys, (k: string) => get(vector2, k, 0) + get(vector1, k, 0));
  return zipObject(allKeys, values) as IVector;
}

export default sumVectors;