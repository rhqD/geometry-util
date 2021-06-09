import { IVector } from "../../interfaces";
import keys from 'lodash/keys';
import isZeroVector from "../isZeroVector";
import get from "lodash/get";
import mapValues from "lodash/mapValues";
import rotateVectorIn3DWithRadianAroundDirection from '../3D/rotateVectorWithRadianAroundDirection';
import round from "../../common/round";
import { mapKeys } from "lodash";

const rotateVectorWithRadian = (vector: IVector, radian: number, presetAxes?: string[]) => {
  const allKeys: string[] = keys(vector);
  const axes: string[] = presetAxes ?? allKeys;
  if (axes.length !== 2) {
    throw new Error('this function is only applicable to 2D vectors');
  }
  const pickedVector = mapValues(
    mapKeys(axes, axisName => axisName),
    axisName => vector[axisName] ?? 0
  );
  if (isZeroVector(pickedVector)) {
    return pickedVector;
  }
  const fakeAxisName = axes.join('_');
  const resultIn3D = rotateVectorIn3DWithRadianAroundDirection(
    {
      ...pickedVector,
      [fakeAxisName]: 0,
    }, {
      [axes[0]]: 0,
      [axes[1]]: 0,
      [fakeAxisName]: 1,
    },
    radian
  );
  return {
    [axes[0]]: round(get(resultIn3D, axes[0], 0)),
    [axes[1]]: round(get(resultIn3D, axes[1], 0)),
  };
  
};

export default rotateVectorWithRadian;