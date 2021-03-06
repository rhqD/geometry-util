import { IVector } from "../../interfaces";
import keys from 'lodash/keys';
import union from 'lodash/union';
import get from 'lodash/get';

const getCrossProduct = (vector1: IVector, vector2: IVector, presetAxes?: string[]) => {
  const allKeys: string[] = union(keys(vector1), keys(vector2));
  const axes = presetAxes ?? allKeys;
  if (axes.length !== 3) {
    throw new Error('cross product only exists for 3 and 7 dimension vectors, and we only support 3 dimension vectors');
  }
  const [k0, k1, k2] = axes;
  return {
    [allKeys[0]]: get(vector1, k1, 0) * get(vector2, k2, 0) - get(vector1, k2, 0) * get(vector2, k1, 0),
    [allKeys[1]]: get(vector1, k2, 0) * get(vector2, k0, 0) - get(vector1, k0, 0) * get(vector2, k2, 0),
    [allKeys[2]]: get(vector1, k0, 0) * get(vector2, k1, 0) - get(vector1, k1, 0) * get(vector2, k0, 0),
  };
}

export default getCrossProduct;