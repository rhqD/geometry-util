import { IDirection, IVector } from "../../interfaces";
import keys from 'lodash/keys';
import union from 'lodash/union';
import isZeroVector from "../isZeroVector";
import projectVectorTo from "../projectVectorTo";
import diffVectors from "../diffVectors";
import getCrossProduct from "./getCrossProduct";
import getVectorLength from "../getVectorLength";
import scaleVector from "../scaleVector";
import sumVectors from "../sumVectors";
import mapKeys from "lodash/mapKeys";
import mapValues from "lodash/mapValues";

const rotateVectorWithRadianAroundDirection = (vector: IVector, direction: IDirection, radian: number, presetAxes?: string[]) => {
  const allKeys: string[] = union(keys(vector), keys(direction));
  const axes = presetAxes ?? allKeys;
  if (axes.length !== 3) {
    throw new Error('rotation is not applicable to this vector');
  }
  const pickedVector = mapValues(
    mapKeys(axes, axisName => axisName),
    axisName => vector[axisName] ?? 0
  );
  const pickedDirection = mapValues(
    mapKeys(axes, axisName => axisName),
    axisName => direction[axisName] ?? 0
  );
  if (isZeroVector(pickedVector) || isZeroVector(pickedDirection)) {
    throw new Error('rotation is not applicable to this vector');
  }
  const projectionVectorAtDirection = projectVectorTo(pickedVector, pickedDirection);
  const projectionVectorAtNormalDirection = diffVectors(pickedVector, projectionVectorAtDirection);
  const lengthOfProjectionVectorAtNormalDirection = getVectorLength(projectionVectorAtNormalDirection);
  const thirdAxisVector = getCrossProduct(pickedDirection, projectionVectorAtNormalDirection);
  const lengthOfThirdAxisVector = getVectorLength(thirdAxisVector);
  const x1 = Math.cos(radian) / lengthOfProjectionVectorAtNormalDirection;
  const x2 = Math.sin(radian) / lengthOfThirdAxisVector;
  const projectionVectorAtNormalDirectionAfterRotation = scaleVector(
    sumVectors(
      scaleVector(projectionVectorAtNormalDirection, x1),
      scaleVector(thirdAxisVector, x2)
    ),
    lengthOfProjectionVectorAtNormalDirection
  );
  return sumVectors(projectionVectorAtNormalDirectionAfterRotation, projectionVectorAtDirection);
};

export default rotateVectorWithRadianAroundDirection;