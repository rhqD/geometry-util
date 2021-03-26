import angleToRadian from "../../common/angleToRadian";
import { IDirection, IVector } from "../../types";
import rotateVectorWithRadianAroundDirection from "./rotateVectorWithRadianAroundDirection";

const rotateVectorWithAngleAroundDirection = (vector: IVector, direction: IDirection, angle: number) => {
  return rotateVectorWithRadianAroundDirection(vector, direction, angleToRadian(angle));
}

export default rotateVectorWithAngleAroundDirection;