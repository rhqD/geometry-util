import angleToRadius from "../../common/angleToRadius";
import { IVector } from "../../types";
import rotateVectorWithRadiusAroundDirection from "./rotateVectorWithRadiusAroundDirection";

const rotateVectorWithAngleAroundDirection = (vector: IVector, angle: number) => {
  return rotateVectorWithRadiusAroundDirection(vector, angleToRadius(angle));
}

export default rotateVectorWithAngleAroundDirection;