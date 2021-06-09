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

const rotateVectorWithRadianAroundDirection = (vector: IVector, direction: IDirection, radian: number) => {
  const allKeys: string[] = union(keys(vector), keys(direction));
  if (allKeys.length !== 3) {
    throw new Error('rotation is not applicable to this vector');
  }
  if (isZeroVector(vector) || isZeroVector(direction)) {
    throw new Error('rotation is not applicable to this vector');
  }
  const projectionVectorAtDirection = projectVectorTo(vector, direction);
  const projectionVectorAtNormalDirection = diffVectors(vector, projectionVectorAtDirection);
  const lengthOfProjectionVectorAtNormalDirection = getVectorLength(projectionVectorAtNormalDirection);
  const thirdAxisVector = getCrossProduct(direction, projectionVectorAtNormalDirection);
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