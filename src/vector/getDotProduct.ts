import { IVector } from "../interfaces";
import keys from 'lodash/keys';
import union from 'lodash/union';
import map from 'lodash/map';
import get from 'lodash/get';
import sum from "lodash/sum";

const getDotProduct = (vector1: IVector, vector2: IVector) => {
  const allKeys: string[] = union(keys(vector1), keys(vector2));
  const values: number[] = map(allKeys, (k: string) => get(vector2, k, 0) * get(vector1, k, 0));
  return sum(values);
}

export default getDotProduct;