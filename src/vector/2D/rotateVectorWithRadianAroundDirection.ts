import { IVector } from "../../types";
import keys from 'lodash/keys';
import isZeroVector from "../isZeroVector";
import get from "lodash/get";
import rotateVectorIn3DWithRadianAroundDirection from '../3D/rotateVectorWithRadianAroundDirection';

const rotateVectorWithRadianAroundDirection = (vector: IVector, radian: number) => {
  const allKeys: string[] = keys(vector);
  if (allKeys.length !== 2) {
    throw new Error('this function is only applicable to 2D vectors');
  }
  if (isZeroVector(vector)) {
    throw new Error('rotation is not applicable to zero vector');
  }
  const fakeAxisName = allKeys.join('_');
  const resultIn3D = rotateVectorIn3DWithRadianAroundDirection(
    {
      ...vector,
      [fakeAxisName]: 0,
    }, {
      [allKeys[0]]: 0,
      [allKeys[1]]: 0,
      [fakeAxisName]: 1,
    },
    radian
  );
  return {
    [allKeys[0]]: get(resultIn3D, allKeys[0], 0),
    [allKeys[1]]: get(resultIn3D, allKeys[1], 0),
  };
  
};

export default rotateVectorWithRadianAroundDirection;