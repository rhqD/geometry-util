import { IDirection, IVector } from "../../types";
import keys from 'lodash/keys';
import union from 'lodash/union';
import isZeroVector from "../isZeroVector";
import projectVectorAt from "../projectVectorAt";
import diffVectors from "../diffVectors";
import getCrossProduct from "./getCrossProduct";
import getVectorLength from "../getVectorLength";
import scaleVector from "../scaleVector";
import sumVectors from "../sumVectors";

const rotateVectorWithRadiusAroundDirection = (vector: IVector, direction: IDirection, radius: number) => {
  const allKeys: string[] = union(keys(vector), keys(direction));
  if (allKeys.length !== 3) {
    throw new Error('rotation is not applicable to this vector');
  }
  if (isZeroVector(vector) || isZeroVector(direction)) {
    throw new Error('rotation is not applicable to this vector');
  }
  const projectionVectorAtDirection = projectVectorAt(vector, direction);
  const projectionVectorAtNormalDirection = diffVectors(vector, projectionVectorAtDirection);
  const lengthOfProjectionVectorAtNormalDirection = getVectorLength(projectionVectorAtNormalDirection);
  const thirdAxisVector = getCrossProduct(direction, projectionVectorAtNormalDirection);
  const lengthOfThirdAxisVector = getVectorLength(thirdAxisVector);
  const x1 = Math.cos(radius) / lengthOfProjectionVectorAtNormalDirection;
  const x2 = Math.sin(-radius) / lengthOfThirdAxisVector;
  const projectionVectorAtNormalDirectionAfterRotation = scaleVector(
    sumVectors(
      scaleVector(projectionVectorAtNormalDirection, x1),
      scaleVector(thirdAxisVector, x2)
    ),
    lengthOfProjectionVectorAtNormalDirection
  );
  return sumVectors(projectionVectorAtNormalDirectionAfterRotation, projectionVectorAtDirection);
};

export default rotateVectorWithRadiusAroundDirection;