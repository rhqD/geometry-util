import keys from 'lodash/keys';
import union from 'lodash/union';
import mapValues from 'lodash/mapValues';
import mapKeys from 'lodash/mapKeys';
import { IVector } from '../../interfaces';
import getRadianBetween from '../getRadianBetween';
import getCrossProduct from '../3D/getCrossProduct';
import round from '../../common/round';

const getDirectedRadianBetween = (vector1: IVector, vector2: IVector, presetAxes?: string[]) => {
  var allKeys = union(keys(vector1), keys(vector2));
  const axes = presetAxes ?? allKeys;
  if (axes.length !== 2) {
    throw new Error('this function is only applicable to 2D vectors');
  }
  const pickedVector1 = mapValues(
    mapKeys(axes, axisName => axisName),
    axisName => vector1[axisName] ?? 0
  );
  const pickedVector2 = mapValues(
    mapKeys(axes, axisName => axisName),
    axisName => vector2[axisName] ?? 0
  );
  const radian = getRadianBetween(pickedVector1, pickedVector2);
  if (round(radian) === 0) {
    return 0;
  }
  const fakeAxisName = axes.join('_');
  const crossProductIn3D = getCrossProduct(
    { ...pickedVector1, [fakeAxisName]: 0 },
    { ...pickedVector2, [fakeAxisName]: 0 },
    [...axes, fakeAxisName]
  );
  if (crossProductIn3D[fakeAxisName] < 0) {
    return -radian;
  }
  return radian;
}

export default getDirectedRadianBetween;