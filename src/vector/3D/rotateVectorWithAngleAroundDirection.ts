import angleToRadius from "../../common/angleToRadius";
import { IDirection, IVector } from "../../types";
import rotateVectorWithRadiusAroundDirection from "./rotateVectorWithRadiusAroundDirection";

const rotateVectorWithAngleAroundDirection = (vector: IVector, direction: IDirection, angle: number) => {
  return rotateVectorWithRadiusAroundDirection(vector, direction, angleToRadius(angle));
}

export default rotateVectorWithAngleAroundDirection;