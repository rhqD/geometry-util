import { IPoint } from "../types";
import keys from 'lodash/keys';
import union from 'lodash/union';
import zipObject from 'lodash/zipObject';
import map from 'lodash/map';
import get from 'lodash/get';

const getMidPoint = (point1: IPoint, point2: IPoint): IPoint => {
  const allKeys: string[] = union(keys(point1), keys(point2));
  const values: number[] = map(allKeys, (k: string) => (get(point1, k, 0) + get(point2, k, 0)) / 2);
  return zipObject(allKeys, values) as IPoint;
}

export default getMidPoint;