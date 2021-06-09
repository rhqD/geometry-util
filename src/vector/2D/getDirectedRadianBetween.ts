import keys from 'lodash/keys';
import union from 'lodash/union';
import { IVector } from '../../interfaces';
import getRadianBetween from '../getRadianBetween';
import getCrossProduct from '../3D/getCrossProduct';
import round from '../../common/round';

const getDirectedRadianBetween = (vector1: IVector, vector2: IVector) => {
  var allKeys = union(keys(vector1), keys(vector2));
  if (allKeys.length !== 2) {
    throw new Error('this function is only applicable to 2D vectors');
  }
  const radian = getRadianBetween(vector1, vector2);
  if (round(radian) === 0) {
    return 0;
  }
  const fakeAxisName = allKeys.join('_');
  const crossProductIn3D = getCrossProduct(
    { ...vector1, [fakeAxisName]: 0 },
    { ...vector2, [fakeAxisName]: 0 }
  );
  if (crossProductIn3D[fakeAxisName] < 0) {
    return -radian;
  }
  return radian;
}

export default getDirectedRadianBetween;