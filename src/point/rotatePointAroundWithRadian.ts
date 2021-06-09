import { IPoint } from "../interfaces";
import { sumVectors } from "../vector";
import rotateVectorWithRadian from "../vector/2D/rotateVectorWithRadian";
import pointsToVector from "../vector/pointsToVector";

const rotatePointAroundWithRadian = (point: IPoint, center: IPoint, radian: number) => {
  const originVector = pointsToVector(center, point);
  const rotatedVector = rotateVectorWithRadian(originVector, radian);
  return sumVectors(center, rotatedVector);
};

export default rotatePointAroundWithRadian;